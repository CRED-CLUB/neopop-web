import styled from 'styled-components';
import { SpinnerProps } from './types';

export const Container = styled.div<SpinnerProps>`
    border: ${(props) => `calc(${props.size} * 8 / 100)`} solid transparent;
    border-top: ${(props) => `calc(${props.size} * 8 / 100)`} solid ${(props) => props.color};
    border-radius: 50%;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
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

export const ContentContainer = styled.div<{ spinningChildren: boolean }>`
    animation: ${(props) => !props.spinningChildren && 'reverse-spin 2s linear infinite'};
    @keyframes reverse-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-360deg);
        }
    }
`;
