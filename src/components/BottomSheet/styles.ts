import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { hexToRGBA } from '../../utils';
import { colorPalette, mainColors } from '../../primitives';

export const Wrapper = styled.div`
    position: relative;
    z-index: 101;
`;

export const Overlay = styled(animated.div)`
    position: fixed;
    top: -60px;
    right: 0px;
    left: 0px;
    bottom: -60px;
    background-color: ${hexToRGBA(mainColors.black, 0.9)};
    touch-action: none;
    z-index: 5;
`;

export const Sheet = styled(animated.div)`
    width: 100%;
    overflow: auto;
    overscroll-behavior: auto;
    scrollbar-width: none;
    width: 100%;
    &::-webkit-scrollbar {
        width: 0px; /* Remove scrollbar space */
        background: transparent; /* Optional: just make scrollbar invisible */
    }
`;

export const CardCustom = styled(animated.div)<{ $maxHeight: string }>`
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    max-height: ${(p) => p.$maxHeight};
    z-index: 6;
    touch-action: none;
`;

export const Card = styled(CardCustom)<{ $sheetShadowColor?: string; $maxHeight: string }>`
    max-height: ${(p) => p.$maxHeight};
    background-color: ${colorPalette.popWhite[400]};
    &::after,
    &::before {
        position: absolute;
        content: ' ';
        top: -3.5px;
        height: 4px;
        width: 55%;
        background-color: ${(p) => (p.$sheetShadowColor ? p.$sheetShadowColor : '#c4c4c4')};
        z-index: 1;
    }
    &::after {
        left: 0;
        margin-left: 1.5px;
        transform: skewX(-45deg);
    }
    &::before {
        right: 0;
        margin-right: 1.5px;
        transform: skewX(45deg);
    }
`;

export const Notch = styled.div`
    position: absolute;
    top: -18px;
    width: 60px;
    height: 2px;
    background-color: ${colorPalette.popBlack[100]};
    left: 50%;
    transform: translate(-50%, 0);
`;

export const Content = styled.div`
    &::after,
    &::before {
        content: ' ';
        clear: both;
        display: table;
    }
`;

export const GapFiller = styled(animated.div)`
    background-color: ${colorPalette.popWhite[400]};
    height: 1px;
    display: block;
    transform-origin: bottom;
    z-index: 10;
    overscroll-behavior: none;
    touch-action: none;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
`;
