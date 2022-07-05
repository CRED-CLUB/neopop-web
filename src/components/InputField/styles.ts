import styled from 'styled-components';
import { mainColors } from '@primitives';
import { generateTextStyle, hexToRGBA } from '@utils';
import { InputConfig } from './types';

export const Container = styled.div``;

export const Input = styled.input`
    ${({ textColor, text }: InputConfig) =>
        text ? generateTextStyle(text.fontType, text.fontSize, text.fontWeight, textColor) : ''}
    display: block;
    border: none;
    outline: none;
    background: transparent;
    caret-color: ${({ caretColor }: InputConfig) => caretColor};
    max-width: 100%;
    width: 100%;
    padding: 0px;
    ::placeholder {
        color: ${({ placeholderColor }: InputConfig) =>
            placeholderColor ?? hexToRGBA(mainColors.black, 0.3)};
    }

    :-ms-input-placeholder {
        /* Internet Explorer 10-11 */

        color: ${({ placeholderColor }: InputConfig) =>
            placeholderColor ?? hexToRGBA(mainColors.black, 0.3)};
    }

    ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */

        color: ${({ placeholderColor }: InputConfig) =>
            placeholderColor ?? hexToRGBA(mainColors.black, 0.3)};
    }

    ::-moz-placeholder {
        /* Firefox 19+ */

        color: ${({ placeholderColor }: InputConfig) =>
            placeholderColor ?? hexToRGBA(mainColors.black, 0.3)};
    }

    :-moz-placeholder {
        /* Firefox 18- */

        color: ${({ placeholderColor }: InputConfig) =>
            placeholderColor ?? hexToRGBA(mainColors.black, 0.3)};
    }
`;

export const Label = styled.label`
    text-align: left;
    margin-bottom: 10px;
    display: block;
`;
