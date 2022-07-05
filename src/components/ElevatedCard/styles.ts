import styled from 'styled-components';
import { PlunkProps } from '@primitives';
import { CardEdgeProps, CardProps } from './types';

const EDGEWIDTH = PlunkProps.WIDTH;
const SKEW_ANGLE = PlunkProps.ANGLE;

export const CardFace = styled.div`
    position: relative;
    background-color: ${({ backgroundColor }: CardProps) => backgroundColor ?? 'transparent'};
    /* padding: ${({ fullWidth }: CardProps) => (fullWidth ? '16px 20px' : '12px 20px')}; */
    z-index: 1;
    width: 100%;
    margin: 0 ${EDGEWIDTH}px ${EDGEWIDTH}px 0;
`;

export const CardEdge = styled.div`
    position: absolute;
    transform-origin: 0% 0%;
    transition: transform ${EDGEWIDTH / 100}s ease;
    &.right {
        height: calc(100% - ${EDGEWIDTH}px);
        width: ${EDGEWIDTH}px;
        transform: translate3d(0px, 0px, 0px) skewY(${SKEW_ANGLE}deg);
        right: 0px;
        /* border-bottom: 1px solid white; */
        background-color: ${({ edgeColors }: CardEdgeProps) => edgeColors?.right ?? 'transparent'};
        top: 0px;
    }
    &.bottom {
        width: calc(100% - ${EDGEWIDTH}px);
        height: ${EDGEWIDTH}px;
        transform: translate3d(0px, 0px, 0px) skewX(${SKEW_ANGLE}deg);
        /* border-right: 1px solid white; */
        bottom: 0px;
        left: 0px;
        background-color: ${({ edgeColors }: CardEdgeProps) => edgeColors?.bottom ?? 'transparent'};
    }
`;
export const CardContainer = styled.div`
    display: ${({ fullWidth }: CardProps) => (fullWidth ? 'block' : 'inline-flex')};
    overflow: hidden;
    user-select: none;
    width: 100%;
    --webkit-user-select: none;
    position: relative;
`;
