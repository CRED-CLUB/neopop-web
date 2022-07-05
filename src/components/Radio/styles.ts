import styled from 'styled-components';
import { mainColors } from '@primitives';
import { RadioContainerColorConfig, StyledRadioProps } from './types';

const RADIO_SIZE = 20;

export const StyledRadio = styled.div<StyledRadioProps>`
    display: block;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    width: ${RADIO_SIZE}px;
    height: ${RADIO_SIZE}px;

    /* Hide the browser's default radio button */
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        left: 0;
    }

    /* Create a custom radio button */
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
        width: ${RADIO_SIZE}px;
        height: ${RADIO_SIZE}px;
        background-color: ${(props) => props.colorConfig.background};
        border: 1px solid ${(props) => props.colorConfig.border};
        box-sizing: border-box;
        &:active {
            box-shadow: inset 2px 2px 0px ${(props) => props.colorConfig.plunk};
            border: 0;
            background-color: ${(props) => props.colorConfig.border};
        }
    }

    /* When the radio button is checked, add a black background */
    input:checked ~ .checkmark {
        background-color: ${(props) => props.colorConfig.border};
        &:active {
            box-shadow: 0px 0px 0px;
        }
    }

    /* Create the indicator (the dot/circle - hidden when not checked) */
    .checkmark:after {
        content: '';
        position: absolute;
        display: none;
    }

    /* Show the indicator (dot/circle) when checked */
    input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the indicator (dot/circle) */
    .checkmark:after {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: ${(props) => props.colorConfig.dotBackground};
    }
`;

export const RadioLabel = styled.label<RadioContainerColorConfig>`
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    --webkit-user-select: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: ${({ borderColor }) => `1px solid ${borderColor}`};
    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: 15px;
    color: ${({ color }) => color ?? mainColors.black};

    .label {
        max-width: calc(100% - 35px);
    }
    &.selected {
        border: ${({ activeBorderColor }) => `1px solid ${activeBorderColor}`};
        background-color: ${({ activeBackgroundColor }) => activeBackgroundColor};
    }
`;
