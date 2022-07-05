import styled from 'styled-components';
import { SearchBarColorConfig } from './types';

export const SearchBarContainer = styled.div`
    display: flex;
    padding: 11px 15px;
    align-items: center;
    border: ${({ border }: SearchBarColorConfig) => `1px solid ${border}`};
    background-color: ${({ backgroundColor }: SearchBarColorConfig) =>
        backgroundColor ? `${backgroundColor}` : 'transparent'};
    &.active {
        border: ${({ activeBorder }: SearchBarColorConfig) => `1px solid ${activeBorder}`};
    }
    .icon {
        margin-right: 10px;
        height: 16px;
        width: auto;
    }
    .input {
        width: 100%;
    }
`;
