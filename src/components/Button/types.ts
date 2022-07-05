import { FontNameSpaceInterface } from '../../types';

interface EdgeColors {
    top: string;
    bottom: string;
    right: string;
    left: string;
}

export enum NeoPopElevationDirections {
    br = 'bottom-right',
    tr = 'top-right',
    bl = 'bottom-left',
    tl = 'top-left',
    bc = 'bottom-center',
    tc = 'top-center',
    rc = 'right-center',
    lc = 'left-center',
}

export type ButtonVariants = 'primary' | 'secondary';
export type ButtonKinds = 'flat' | 'elevated' | 'link';
export type ButtonSizes = 'big' | 'medium' | 'small';
export type ButtonModes = 'dark' | 'light';
export interface ColorConfig {
    borderColor?: string;
    backgroundColor?: string;
    edgeColors?: EdgeColors;
    color?: string;
}

export interface ButtonColorConfig extends ColorConfig {
    disabledColors?: ColorConfig;
}
export interface ButtonSpacingConfig {
    padding?: string;
    height?: string;
    iconHeight?: string;
}

export interface ButtonUIConfig {
    colorConfig?: ButtonColorConfig;
    textStyle?: FontNameSpaceInterface;
    spacingConfig?: ButtonSpacingConfig;
    elevationDirection?: NeoPopElevationDirections;
    icon?: string;
}

export interface LinkButtonProps {
    color?: string;
}
export interface ButtonProps extends ButtonUIConfig, React.HTMLAttributes<HTMLButtonElement> {
    style?: React.CSSProperties;
    children?: React.ReactNode;
    variant?: ButtonVariants;
    kind?: ButtonKinds;
    size?: ButtonSizes;
    colorMode?: ButtonModes;
    disabled?: boolean;
    showArrow?: boolean;
    fullWidth?: boolean;
    onClick?: () => void;
}
