import { FontNameSpaceInterface } from '../../types';

export interface InputColorConfig {
    textColor?: string;
    labelColor?: string;
    caretColor?: string;
    errorColor?: string;
    placeholderColor?: string;
}

export interface InputTypographyConfig {
    label?: FontNameSpaceInterface;
    text?: FontNameSpaceInterface;
}
export interface InputConfig extends InputColorConfig, InputTypographyConfig {}

export type InputFieldColorModes = 'dark' | 'light';
export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    isDisabled?: boolean;
    placeholder?: string;
    scrollIntoView?: boolean;
    id?: string;
    label?: string;
    onChange?: any;
    maxLength?: number;
    value?: any;
    tabIndex?: number;
    autoComplete?: string;
    onBlur?: any;
    onFocus?: any;
    style?: {};
    autoFocus?: boolean;
    hasError?: boolean;
    inputRef?: React.MutableRefObject<HTMLInputElement | null>;
    errorMessage?: string;
    colorConfig?: InputColorConfig;
    textStyle?: {
        input: FontNameSpaceInterface;
        label: FontNameSpaceInterface;
    };
    inputMode?: 'text' | 'search' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'none';
    colorMode?: InputFieldColorModes;
}
