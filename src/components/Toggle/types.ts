export type ToggleColorModes = 'dark' | 'light';

export interface ToggleProps {
    /**
     * checkbox color configs
     */
    colorConfig?: ToggleColorConfig;
    /**
     * Mode of toggle
     */
    colorMode?: ToggleColorModes;
    /**
     * Is toggle on?
     */
    isChecked: boolean;
    /**
     * onChange event handler
     */
    handleChange?: React.ChangeEventHandler<HTMLInputElement>;
}

type ToggleColors = {
    switchBackground: string;
    switchBorder: string;
    buttonBackground: string;
    buttonBorder: string;
    buttonMarkBackground: string;
};

export interface ToggleColorConfig {
    on: ToggleColors;
    off: ToggleColors;
}

export interface StyledToggleProps {
    colorConfig: ToggleColorConfig;
    isChecked: boolean;
}
