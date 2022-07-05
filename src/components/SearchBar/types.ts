import { FontNameSpaceInterface, InputColorConfig } from '@types';

export interface SearchBarColorConfig {
    border: string;
    activeBorder: string;
    backgroundColor: string;
    closeIcon: string;
}

export type SearchBarColorModes = 'dark' | 'light';

export interface SearchBarProps {
    iconUrl?: string;
    textStyle?: FontNameSpaceInterface;
    placeholder?: string;
    handleSearchInput: Function;
    colorConfig?: SearchBarColorConfig;
    inputColorConfig?: InputColorConfig;
    onSubmit?: () => void;
    colorMode?: SearchBarColorModes;
}
