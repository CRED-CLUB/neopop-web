import styled from 'styled-components';
import { StyledToggleProps } from './types';

export const ToggleBtn = styled.div<StyledToggleProps>`
    width: 40px;
    height: 22px;
    border: 1px solid ${(props) => props.colorConfig.on.switchBorder};
    box-sizing: border-box;
    background-color: ${(props) =>
        props.isChecked
            ? props.colorConfig.on.switchBackground
            : props.colorConfig.off.switchBackground};
    transition: background-color 0.15s ease, border-width 0.15s ease;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    input {
        opacity: 0;
        width: 0;
        height: 0;
        position: absolute;
    }

    /* Create a custom toggle box */
    .mark {
        width: 20px;
        height: 20px;
        background-color: ${(props) => props.colorConfig.off.buttonBackground};
        border: 1px solid ${(props) => props.colorConfig.off.buttonBorder};
        box-sizing: border-box;
        position: relative;
        transition: transform 0.15s ease;
    }

    input:checked ~ .mark {
        background-color: ${(props) => props.colorConfig.on.buttonBackground};
        border: 1px solid ${(props) => props.colorConfig.on.buttonBorder};
        transform: translateX(18px);
    }

    // square mark
    .mark:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: 8px;
        height: 8px;
        transform: translate(-50%, -50%);
        opacity: 1;
        transition: opacity 0.15s ease;
        background-color: ${(props) => props.colorConfig.off.buttonMarkBackground};
    }

    input:checked ~ .mark:after {
        background-color: ${(props) => props.colorConfig.on.buttonMarkBackground};
    }
`;
