import styled, { css } from 'styled-components';
import { PlunkProps } from '@primitives';
import { LinkButtonProps, ButtonProps, NeoPopElevationDirections } from './types';

const EDGEWIDTH = PlunkProps.WIDTH;
const SKEW_ANGLE = PlunkProps.ANGLE;

const shouldNotMoveRightEdge = (elevationDirection: NeoPopElevationDirections | undefined) => {
    if (
        elevationDirection === NeoPopElevationDirections.lc ||
        elevationDirection === NeoPopElevationDirections.rc ||
        elevationDirection === NeoPopElevationDirections.tc ||
        elevationDirection === NeoPopElevationDirections.tr ||
        elevationDirection === NeoPopElevationDirections.tl
    )
        return true;
    return false;
};

const shouldNotMoveBottomEdge = (elevationDirection: NeoPopElevationDirections | undefined) => {
    if (
        elevationDirection === NeoPopElevationDirections.lc ||
        elevationDirection === NeoPopElevationDirections.tc ||
        elevationDirection === NeoPopElevationDirections.bc ||
        elevationDirection === NeoPopElevationDirections.bl ||
        elevationDirection === NeoPopElevationDirections.tl
    )
        return true;
    return false;
};

type StyledButtonType = Exclude<ButtonProps, 'textStyle' | 'color'>;

export const ButtonWrapper = styled.button<StyledButtonType>`
    outline: none;
    margin: 0;
    border: 0;
    background: transparent;
    padding: 0;
    display: ${({ fullWidth }) => (fullWidth ? 'block' : 'inline-flex')};
    overflow: hidden;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    --webkit-user-select: none;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
    height: 100%;
    will-change: transform;
    ${({ disabled }) =>
        disabled
            ? css`
                  pointer-events: none;
              `
            : `

    `}
    .button-face {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: ${({ colorConfig }) => colorConfig?.backgroundColor ?? 'transparent'};
        border: ${({ colorConfig }) =>
            colorConfig?.borderColor ? `1px solid ${colorConfig?.borderColor}` : 'none'};
        padding: ${({ spacingConfig }) => spacingConfig?.padding ?? '16px 20px'};
        z-index: 2;
        height: ${({ spacingConfig }) => spacingConfig?.height ?? 'auto'};
        /* transition: transform ${EDGEWIDTH / 100}s ease; */
        transition: transform 0.12s ease-in-out;
        -webkit-transition: transform 0.12s ease-in-out;
        -moz-transition: transform 0.12s ease-in-out;
        &.elevated {
            margin: 0 ${EDGEWIDTH}px ${EDGEWIDTH}px 0;
        }
        .icon {
            height: ${({ spacingConfig }) => spacingConfig?.iconHeight ?? '16px'};
            width: auto;
            margin-right: 10px;
        }
        .arrow {
            margin-left: 10px;
        }
    }

    .button-edge {
        position: absolute;
        transform-origin: 0% 0%;
        /* transition: transform ${EDGEWIDTH / 100}s ease; */
        transition: transform 0.12s ease-in-out;
        -webkit-transition: transform 0.12s ease-in-out;
        -moz-transition: transform 0.12s ease-in-out;
        /* pointer-events: none; */

        &.right {
            height: calc(100% - ${EDGEWIDTH}px);
            width: ${EDGEWIDTH}px;
            transform: translate3d(0px, 0px, 0px) skewY(45deg);
            right: 0px;
            /* border-bottom: 1px solid white; */
            background-color: ${({ colorConfig }) =>
                colorConfig?.edgeColors?.right ?? 'transparent'};
            top: 0px;
            z-index: 2;
        }
        &.bottom {
            width: calc(100% - ${EDGEWIDTH}px);
            height: ${EDGEWIDTH}px;
            transform: translate3d(0px, 0px, 0px) skewX(45deg);
            /* border-right: 1px solid white; */
            bottom: 0px;
            left: 0px;
            background-color: ${({ colorConfig }) =>
                colorConfig?.edgeColors?.bottom ?? 'transparent'};
            z-index: 2;
        }
        &.top {
            width: calc(100% - ${EDGEWIDTH}px);
            height: ${EDGEWIDTH}px;
            transform: skewX(45deg) scaleY(1);
            top: 0px;
            left: 0px;
            background-color: ${({ colorConfig }) => colorConfig?.edgeColors?.top ?? 'transparent'};
            &:after {
                content: '';
                height: 3px;
                width: 6px;
                background-color: ${({ colorConfig }) =>
                    colorConfig?.edgeColors?.top ?? 'transparent'};
                transform: skewX(-45deg) scaleY(1);
                position: absolute;
                right: -2px;
            }
        }
        &.left {
            height: calc(100% - ${EDGEWIDTH}px);
            width: ${EDGEWIDTH}px;
            transform: skewY(45deg) scaleY(1);
            left: 0px;
            top: 0px;
            z-index: 1;
            background-color: ${({ colorConfig }) =>
                colorConfig?.edgeColors?.left ?? 'transparent'};
            &:after {
                content: '';
                height: 6px;
                width: 3px;
                background-color: ${({ colorConfig }) =>
                    colorConfig?.edgeColors?.left ?? 'transparent'};
                transform: skewY(-45deg) scaleY(1);
                position: absolute;
                bottom: -2px;
                right: 0px;
            }
        }
    }
    &:active,
    &.active {
        .button-face {
            transform: translate3d(${EDGEWIDTH}px, ${EDGEWIDTH}px, 0);
        }
        .button-edge {
            &.bottom {
                transform: ${({ elevationDirection }) =>
                    shouldNotMoveRightEdge(elevationDirection)
                        ? `skewX(${SKEW_ANGLE}deg)`
                        : `translate3d(${EDGEWIDTH}px, ${EDGEWIDTH}px, 0) skewX(${SKEW_ANGLE}deg)`};
            }
            &.right {
                transform: ${({ elevationDirection }) =>
                    shouldNotMoveBottomEdge(elevationDirection)
                        ? `skewY(${SKEW_ANGLE}deg)`
                        : `translate3d(${EDGEWIDTH}px, ${EDGEWIDTH}px, 0) skewY(${SKEW_ANGLE}deg)`};
            }
        }
    }
    ${({ disabled }) =>
        disabled
            ? css<StyledButtonType>`
                  .button-face {
                      background-color: ${({ colorConfig }) =>
                          colorConfig?.disabledColors?.backgroundColor
                              ? colorConfig?.disabledColors?.backgroundColor
                              : ''};
                      border: ${({ colorConfig }) =>
                          colorConfig?.disabledColors?.borderColor
                              ? `1px solid ${colorConfig?.disabledColors?.borderColor}`
                              : ''};
                      color: rgba(255, 255, 255, 0.5);
                      &:active {
                          transform: none;
                      }
                  }
                  .button-edge {
                      &.right {
                          background-color: ${({ colorConfig }) =>
                              colorConfig?.disabledColors?.edgeColors?.right ?? 'transparent'};
                      }
                      &.bottom {
                          background-color: ${({ colorConfig }) =>
                              colorConfig?.disabledColors?.edgeColors?.bottom ?? 'transparent'};
                      }
                      &.top {
                          background-color: ${({ colorConfig }) =>
                              colorConfig?.disabledColors?.edgeColors?.top ?? 'transparent'};
                      }
                      &.left {
                          background-color: ${({ colorConfig }) =>
                              colorConfig?.disabledColors?.edgeColors?.left ?? 'transparent'};
                      }
                      &:active,
                      &.active {
                          &.bottom {
                              transform: skewX(${SKEW_ANGLE}deg);
                          }
                          &.right {
                              transform: skewY(${SKEW_ANGLE}deg);
                          }
                      }
                  }
              `
            : `

        `}
`;

export const LinkButtonContainer = styled.button`
    outline: none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    border: 0;
    display: inline-flex;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    --webkit-user-select: none;
    cursor: pointer;
    color: ${({ color }: LinkButtonProps) => color ?? ''};
    border-bottom: ${({ color }: LinkButtonProps) => (color ? `1px solid ${color}` : '')};
    ${({ disabled }: StyledButtonType) =>
        disabled
            ? css`
                  pointer-events: none;
              `
            : `

        `}
`;
