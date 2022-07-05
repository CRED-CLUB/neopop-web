import styled from 'styled-components';
import { DropdownConfig } from './types';

export const DropdownContainer = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    --webkit-user-select: none;
    padding: 10px 15px;
    border: ${({ border }: DropdownConfig) => `1px solid ${border}`};
    &.no-label {
        width: 22px;
        min-width: 22px;
        height: 22px;
        padding: 0px;
    }
`;
