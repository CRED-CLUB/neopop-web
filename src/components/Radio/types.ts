export type RadioColorModes = 'dark' | 'light';
export interface RadioContainerColorConfig {
    borderColor: string;
    backgroundColor: string;
    activeBackgroundColor: string;
    activeBorderColor: string;
    color: string;
}
export interface RadioColorConfig {
    background: string;
    border: string;
    plunk: string;
    dotBackground: string;
    containerConfig?: RadioContainerColorConfig;
}

export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
    /**
     * id attribute
     */
    id?: string;
    /**
     * name attribute
     */
    name?: string;
    /**
     * name attribute
     */
    value?: string;
    /**
     * is radio checked?
     */
    isChecked: boolean;
    /**
     * color configs for radio
     */
    colorConfig?: RadioColorConfig;
    /**
     * Mode of radio
     */
    colorMode?: RadioColorModes;
    /**
     * radio onChange handler
     */
    handleChange: (v?: React.ChangeEvent<HTMLInputElement>) => void;

    label?: React.ReactNode;
}

export interface StyledRadioProps {
    colorConfig: RadioColorConfig;
}
