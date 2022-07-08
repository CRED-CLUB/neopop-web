import styled from 'styled-components';
import { SpinnerProps } from './types';
import { mainColors } from '@primitives';

export const Container = styled.div<SpinnerProps>`
    border: ${(props) => (props.size ? `calc(${props.size} * 8 / 100)` : '4px')} solid transparent;
    border-top: ${(props) => (props.size ? `calc(${props.size} * 8 / 100)` : '4px')} solid
        ${(props) => props.color || mainColors.blue};
    border-radius: 50%;
    width: ${(props) => props.size || '50px'};
    height: ${(props) => props.size || '50px'};
    animation: spin 2s linear infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props) => props.style && `${props.style}`}

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const ContentContainer = styled.div<{ spinningContent: boolean }>`
    animation: ${(props) => !props.spinningContent && 'reverse-spin 2s linear infinite'};
    @keyframes reverse-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-360deg);
        }
    }
`;
