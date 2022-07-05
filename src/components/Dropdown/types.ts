export interface DropdownConfig {
    border?: string;
    text?: string;
    chevron?: string;
}

export type DropdownColorModes = 'dark' | 'light';
export interface DropdownProps {
    onClick: () => void;
    label: string;
    colorConfig?: DropdownConfig;
    colorMode?: DropdownColorModes;
}
