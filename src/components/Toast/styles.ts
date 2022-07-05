import styled, { css } from 'styled-components';
import { ToastItemProps } from './types';

const showUp = (autoCloseTime: number) => css`
    @keyframes showup {
        0% {
            transform: translateY(-120%);
        }
        ${`${20000 / autoCloseTime || 3000}%`} {
            transform: translateX(0);
        }
        90% {
            transform: translateX(0);
        }
        100% {
            transform: translateY(-120%);
        }
    }
`;

export const ToastItem = styled.div`
    ${({ autoCloseTime }: ToastItemProps) => showUp(autoCloseTime || 3000)};
    display: flex;
    align-items: flex-start;
    border-radius: ${(props: ToastItemProps) => (props.fullWidth ? '0' : '4px')};
    background-color: ${(props: ToastItemProps) => props.background};
    padding: 15px;
    margin: ${(props: ToastItemProps) => (props.fullWidth ? 'auto' : '8px')};
    margin-top: env(safe-area-inset-top);
    margin-top: constant(safe-area-inset-top);
    width: ${(props: ToastItemProps) => (props.fullWidth ? '100%' : 'auto')};
    position: fixed;
    top: 0;
    left: 0;
    animation: ${({ autoCloseTime }: ToastItemProps) =>
        `showup ${autoCloseTime || '3000'}ms ease-in`};
    animation-fill-mode: forwards;
    z-index: 1001;
`;

export const ToastItemMsgContainer = styled.div`
    /* padding: 15px 0px 15px 30px; */
`;

export const Icon = styled.img`
    margin-left: 15px;
    height: 30px;
    min-height: 30px;
    width: auto;
`;
