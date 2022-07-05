import styled from 'styled-components';
import { PlunkProps } from '@primitives';
import { CheckmarkWrapperProps } from './types';

const BOX_SIZE = 20;

export const CheckboxLabel = styled.label`
    position: relative;
    width: ${BOX_SIZE}px;
    height: ${BOX_SIZE}px;
    overflow: hidden;
    box-sizing: border-box;
    transition: transform 0.15s ease;
    user-select: none;
    cursor: pointer;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    /* Hide the browser's default checkbox */
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
`;

export const CheckmarkWrapper = styled.div<CheckmarkWrapperProps>`
    width: 20px;
    height: 20px;
    overflow: hidden;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 20px;
        height: ${PlunkProps.WIDTH}px;
        background-color: ${(props) => props.colorConfig.topPlunk};
        transform-origin: 0% 0%;
        transform: skewX(${PlunkProps.ANGLE}deg) scaleY(1);
        transition: background-color 0.15s ease;
        opacity: 0;
    }
    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: ${PlunkProps.WIDTH}px;
        height: 20px;
        background-color: ${(props) => props.colorConfig.leftPlunk};
        transform-origin: 0% 0%;
        transform: skewY(${PlunkProps.ANGLE}deg) scaleX(1);
        transition: background-color 0.15s ease;
        opacity: 0;
    }

    &:active {
        &:before {
            transition: opacity 0.1s ease 0.03s;
            opacity: 1;
        }
        &:after {
            transition: opacity 0.1s ease 0.03s;
            opacity: 1;
        }
    }

    /* Create a custom checkbox */
    .checkmark {
        box-sizing: border-box;
        position: absolute;
        height: ${BOX_SIZE}px;
        width: ${BOX_SIZE}px;
        background-color: ${(props) =>
            props.checked ? props.colorConfig.border : props.colorConfig.background};
        transition: all 0.15s ease;
        cursor: pointer;
        border: 1px solid ${(props) => props.colorConfig.border};
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        &:active {
            transform: translate(${PlunkProps.WIDTH}px, ${PlunkProps.WIDTH}px);
            background-color: ${(props) => props.colorConfig.border};
        }
    }

    &:active .checkmark {
        transform: translate(${PlunkProps.WIDTH}px, ${PlunkProps.WIDTH}px);
    }
    /* tick mark */
    .tick-svg {
        transition: opacity 0.15s ease;
        opacity: ${({ checked }) => (checked ? '1' : '0')};
    }
`;
