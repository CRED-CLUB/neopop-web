import React from 'react';
export interface CheckboxColorConfig {
    background: string;
    border: string;
    leftPlunk: string;
    topPlunk: string;
}

export type CheckboxColorModes = 'dark' | 'light';

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
    /**
     * color mode of checkbox
     */
    colorMode?: CheckboxColorModes;
    /**
     * checkbox color configs
     */
    colorConfig?: CheckboxColorConfig;
    /**
     * is Checkbox checked?
     */
    isChecked: boolean;
    /**
     * onChange event handler
     */
    handleChange?: React.ChangeEventHandler<HTMLInputElement>;
    /**
     * label or children?
     */
    children?: React.ReactNode;
}

export interface CheckmarkWrapperProps {
    colorConfig: CheckboxColorConfig;
    hasChildren: boolean;
    checked: boolean;
}
