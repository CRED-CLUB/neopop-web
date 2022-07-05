import styled, { css } from 'styled-components';
import { ScoremeterColorConfig, ScoremeterTypes } from './types';

export const MeterContainer = styled.div`
    position: relative;
    height: 185px;
`;

interface StyledScoremeter {
    colorConfig: ScoremeterColorConfig;
    type: ScoremeterTypes;
    showIndicators?: boolean;
}

export const MeterWrapper = styled.div<StyledScoremeter>`
    position: relative;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: ${({ colorConfig }) => colorConfig?.meterStrokeBackground ?? 'transparent'};
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${({ colorConfig }) => `1px solid ${colorConfig?.meterBorderColor}`};

    &.absoulte-center {
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .dot {
        width: 6px;
        height: 6px;
        position: absolute;
        background: ${({ colorConfig, type }) =>
            colorConfig?.dotColor
                ? colorConfig.dotColor
                : colorConfig?.meterStrokeColor[type ?? 'excellent']};
        border-radius: 50%;
        z-index: 9;
        transform: rotateZ(45deg) translateY(80px);
        transition: transform 0.2s ease;
    }

    .meter {
        transform: rotate(135deg);
        background: ${({ colorConfig }) => colorConfig?.meterStrokeBackground};
        border-radius: 50%;
    }
`;

export const ScoreContainer = styled.div<StyledScoremeter>`
    width: 115px;
    height: 115px;
    border-radius: 50%;
    background: ${({ colorConfig }) =>
        colorConfig?.scoreContainerBorder ? colorConfig?.scoreContainerBorder : 'transparent'};
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    .score {
        all: inherit;
        background: ${({ colorConfig }) => colorConfig?.scoreContainerBackground};
        color: ${({ colorConfig }) => colorConfig?.scoreColor};
        padding-top: ${({ showIndicators }) => (showIndicators ? '6%' : '0')};
        width: 95px;
        height: 95px;
        letter-spacing: 1px;
        overflow: hidden;
    }
`;

export const MeterSVG = styled.svg`
    display: block;
    & .path {
        transition: stroke-dasharray 100ms ease;
    }
    & .path1 {
        transition: stroke-dasharray 100ms ease;
    }
`;

export const Legend = styled.div`
    position: absolute;
    bottom: 0;
    color: #4b4f52;
    ${(props: { right?: boolean }) =>
        props.right
            ? css`
                  right: 0;
              `
            : css`
                  left: 0;
              `};
    .dot {
        text-align: center;
        color: #434547;
    }
`;
