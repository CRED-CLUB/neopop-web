import React, { useEffect, useRef } from 'react';
import { useSpring } from '@react-spring/web';
import { Handler, useDrag, rubberbandIfOutOfBounds } from '@use-gesture/react';
import { Portal } from 'react-portal';
import useDelayMount from '@hooks/useDelayMount';
import useClientHeight from '@hooks/useClientHeight';
import { UseBottomSheetMechanicsArgs, Prop } from '../types';

import { Wrapper, Overlay, Sheet, GapFiller, Content, Card, Notch, CardCustom } from '../styles';

const twoThirdOf = (number: number) => (number * 2) / 3;

export const useBottomSheetMechanics = ({
    open,
    handleClose,
    onBeforeClose,
    onCloseEnd,
    blocking,
    onOpenEnd,
}: UseBottomSheetMechanicsArgs) => {
    const mounted = useDelayMount(open);
    const [{ y, opacity, scaleY }, api] = useSpring(() => ({
        y: '100%',
        scaleY: 1,
        opacity: 0,
        config: { tension: 180, friction: 25 },
    }));
    const [cardRef, sheetHeight] = useClientHeight<HTMLDivElement>();
    const preventScrollRef = useRef(false);
    const closeInProgressRef = useRef(false);

    const requestCloseBottomSheet = () => {
        if (closeInProgressRef.current) {
            return;
        }
        closeInProgressRef.current = true;
        handleClose();
    };

    const springApiSet = async ({ onRest = () => {}, ...option }: any) =>
        new Promise((resolve) => {
            api.start({
                ...option,
                onRest: (...args) => {
                    resolve(args);
                    onRest?.(...args);
                },
            });
        });

    const closeBottomSheet = () => {
        if (onBeforeClose instanceof Function) {
            onBeforeClose();
        }
        closeInProgressRef.current = true;
        springApiSet({
            opacity: 0,
            y: sheetHeight ? `${sheetHeight + 200}px` : '115%',
            onRest: (...args: any[]) => {
                const event = args[0];
                if (event?.finished && !event?.cancelled) {
                    onCloseEnd();
                }
            },
        });
    };

    useEffect(() => {
        (async () => {
            if (mounted) {
                await springApiSet({
                    opacity: 1,
                    y: '0px',
                });
                if (onOpenEnd instanceof Function) {
                    onOpenEnd();
                }
                closeInProgressRef.current = false;
            } else {
                closeBottomSheet();
            }
        })();
    }, [mounted]);

    useEffect(() => {
        const element = cardRef.ref.current;
        const preventScrolling = (e: Event) => {
            if (preventScrollRef.current) {
                e.preventDefault();
            }
        };

        element.addEventListener('scroll', preventScrolling);
        element.addEventListener('touchmove', preventScrolling);

        return () => {
            element.removeEventListener('scroll', preventScrolling);
            element.removeEventListener('touchmove', preventScrolling);
        };
    }, [cardRef.ref.current]);

    const handleDrag: Handler<'drag'> = ({
        args: [{ closeOnTap = false, contentSheet = false } = {}] = [],
        cancel,
        active,
        tap,
        velocity: [, vy = 0],
        movement: [, my],
        direction: [, dy],
    }) => {
        if (closeInProgressRef.current) {
            return;
        }

        if (tap && closeOnTap) {
            requestCloseBottomSheet();
            return;
        }

        if (contentSheet) {
            const elem = cardRef.ref.current;
            preventScrollRef.current = dy > 0 && elem.scrollTop === 0;
        }

        // it's not the correct Physics formula just a measure of user intent
        const predictedDistance = my * vy;
        if (!blocking && predictedDistance >= twoThirdOf(sheetHeight)) {
            cancel();
            requestCloseBottomSheet();
            return;
        }

        const yValue = rubberbandIfOutOfBounds(my, -1, sheetHeight + 100, 0.12);
        springApiSet({
            y: active ? `${yValue}px` : '0px',
            immediate: active,
            scaleY: active && yValue < 0 ? Math.ceil(Math.abs(yValue)) : 1,
        });
    };

    const bind = useDrag(handleDrag, {
        filterTaps: true,
    });

    return {
        requestCloseBottomSheet,
        opacity,
        y,
        bind,
        cardRef,
        scaleY,
    };
};

const BottomSheetControlled = ({
    children,
    node,
    handleClose,
    blocking = false,
    onCloseEnd,
    onBeforeClose,
    open,
    maxHeight = '85%',
    sheetStyle,
    sheetPlunkColor,
    overlayColor,
    ...props
}: Prop) => {
    const { requestCloseBottomSheet, opacity, y, bind, cardRef, scaleY } = useBottomSheetMechanics({
        open,
        handleClose,
        onBeforeClose,
        onCloseEnd,
        blocking,
    });

    return (
        <Portal node={node || document.body}>
            <Wrapper {...props}>
                <Overlay
                    onKeyDown={(event) => {
                        if (event.key === 'Escape' && !blocking) {
                            // Always stop propagation, to avoid weirdness for bottom sheets inside other bottom sheets
                            event.stopPropagation();
                            requestCloseBottomSheet();
                        }
                    }}
                    style={{ opacity, backgroundColor: overlayColor }}
                    {...bind({ closeOnTap: !blocking })}
                />
                <Card
                    $sheetShadowColor={sheetPlunkColor}
                    $maxHeight={maxHeight}
                    style={{ ...sheetStyle, y }}
                >
                    <Notch {...bind()} />
                    <Sheet {...cardRef} {...bind({ contentSheet: true })}>
                        <Content>{children}</Content>
                    </Sheet>
                </Card>
                <GapFiller style={{ scaleY, opacity }} />
            </Wrapper>
        </Portal>
    );
};

export const BottomSheetControlledCustom = ({
    children,
    node,
    handleClose,
    blocking = false,
    onCloseEnd,
    onBeforeClose,
    open,
    maxHeight = '85%',
    sheetStyle,
    sheetPlunkColor,
    overlayColor,
    shouldShowNotch = true,
    shouldShowOverlay = true,
    ...props
}: Prop) => {
    const { requestCloseBottomSheet, opacity, y, bind, cardRef } = useBottomSheetMechanics({
        open,
        handleClose,
        onBeforeClose,
        onCloseEnd,
        blocking,
    });

    return (
        <Portal node={node || document.body}>
            <Wrapper {...props}>
                {shouldShowOverlay ? (
                    <Overlay
                        onKeyDown={(event) => {
                            if (event.key === 'Escape' && !blocking) {
                                // Always stop propagation, to avoid weirdness for bottom sheets inside other bottom sheets
                                event.stopPropagation();
                                requestCloseBottomSheet();
                            }
                        }}
                        style={{ opacity, backgroundColor: overlayColor }}
                        {...bind({ closeOnTap: !blocking })}
                    />
                ) : null}
                <CardCustom $maxHeight={maxHeight} style={{ ...sheetStyle, y }}>
                    {shouldShowNotch ? <Notch {...bind()} /> : null}
                    <Sheet {...cardRef} {...bind({ contentSheet: true })}>
                        {children}
                    </Sheet>
                </CardCustom>
            </Wrapper>
        </Portal>
    );
};

export default BottomSheetControlled;
