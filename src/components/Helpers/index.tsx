import styled from 'styled-components';
import { mainColors } from '@primitives';
import * as React from 'react';
import { ChevronProps, Directions, PointerProps, CrossProps } from './types';
import { hexToRGBA } from '@utils';

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    &.h-center {
        align-items: center;
    }
    &.v-center {
        justify-content: center;
    }
    &.v-justify {
        justify-content: space-between;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    &.v-center {
        align-items: center;
    }
    &.h-center {
        justify-content: center;
    }
`;

export const PageContainer = styled.div`
    background-color: ${mainColors.black};
    min-height: calc(100vh - constant(safe-area-inset-top));
    min-height: calc(100vh - env(safe-area-inset-top));
    width: 100vw;
    padding: 0px 15px 0px 30px;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    display: flex;
    flex-direction: column;
`;

export const HorizontalDivider = styled.div`
    background-color: ${({ color }) => color ?? hexToRGBA(mainColors.white, 0.1)};
    margin: 0px;
    width: 100%;
    height: 1px;
    position: relative;
`;

type SpacerType = {
    n: number;
};
export const HorizontalSpacer = styled.div<SpacerType>`
    margin-bottom: ${({ n }: SpacerType) => `calc(${n} * 5px)`};
`;

export const VerticalSpacer = styled.div<SpacerType>`
    margin-right: ${({ n }: SpacerType) => `calc(${n} * 5px)`};
`;

const RotateDegrees = {
    [Directions.NORTH]: '-90deg',
    [Directions.SOUTH]: '90deg',
    [Directions.EAST]: '0deg',
    [Directions.WEST]: '180deg',
};

export const Chevron = ({
    color = mainColors.white,
    direction = Directions.EAST,
}: ChevronProps) => (
    <svg
        style={{ transform: `rotate(${RotateDegrees[direction ?? Directions.EAST]})` }}
        width="8"
        height="11"
        viewBox="0 0 8 11"
        fill="none"
    >
        <path d="M2 9.5L6 5.5L2 1.5" stroke={color} strokeWidth="1.5" strokeLinecap="square" />
    </svg>
);

export const Pointer = ({
    color = mainColors.white,
    direction = Directions.EAST,
    size = 'medium',
    style,
}: PointerProps) =>
    size === 'small' ? (
        <svg
            style={{
                transform: `rotate(${RotateDegrees[direction ?? Directions.EAST]})`,
                ...style,
            }}
            width="13"
            height="9"
            viewBox="0 0 13 9"
            fill="none"
        >
            <path
                d="M1 3.74996H0.25V5.24996H1V3.74996ZM1 5.24996H11.9997V3.74996H1V5.24996ZM8.37874 0.5C8.37874 3.09998 10.4246 5.25 12.9997 5.25V3.75C11.299 3.75 9.87874 2.31829 9.87874 0.5L8.37874 0.5ZM12.9997 3.75C10.4246 3.75 8.37865 5.89999 8.37865 8.5H9.87865C9.87865 6.68173 11.299 5.25 12.9997 5.25V3.75Z"
                fill={color}
            />
        </svg>
    ) : (
        <svg
            style={{
                transform: `rotate(${RotateDegrees[direction ?? Directions.EAST]})`,
                ...style,
            }}
            width="21"
            height="9"
            viewBox="0 0 21 9"
            fill="none"
        >
            <path
                d="M1 3.74996H0.25L0.25 5.24996L1 5.24996L1 3.74996ZM1 5.24996L20 5.24996V3.74996L1 3.74996L1 5.24996ZM16.379 0.5C16.379 3.09998 18.4249 5.25 21 5.25V3.75C19.2993 3.75 17.879 2.3183 17.879 0.5L16.379 0.5ZM21 3.75C18.4249 3.75 16.3789 5.89999 16.3789 8.5H17.8789C17.8789 6.68172 19.2993 5.25 21 5.25V3.75Z"
                fill={color}
            />
        </svg>
    );

export const Cross = ({ color = mainColors.white, onClick }: CrossProps) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" onClick={onClick}>
        <path d="M2 10L6 6L2 2" stroke={color} strokeWidth="1.5" strokeLinecap="square" />
        <path d="M10 10L6 6L10 2" stroke={color} strokeWidth="1.5" strokeLinecap="square" />
    </svg>
);
