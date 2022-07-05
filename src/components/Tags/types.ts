import { FontNameSpaceInterface } from '@types';

interface ColorConfig {
    background?: string;
    color: string;
}

export type TagColorMode = 'dark' | 'light';
export type TagTypes = 'warning' | 'error' | 'success' | 'info';

export interface TagProps {
    children: React.ReactNode;
    colorConfig: ColorConfig;
    noContainer?: boolean;
    icon?: string;
    textStyle?: FontNameSpaceInterface;
    colorMode?: TagColorMode;
    type?: TagTypes;
}

export interface ContainerProps {
    bgColor: string;
}
