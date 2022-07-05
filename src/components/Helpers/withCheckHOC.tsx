import React, { useState, useEffect } from 'react';
import { RadioColorConfig, CheckboxColorConfig, ToggleColorConfig } from '../../types';

export interface CheckHOCProps {
    colorConfig: CheckboxColorConfig | RadioColorConfig | ToggleColorConfig;
    isChecked?: boolean;
    onChange?: (v: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    name?: string;
    value?: string;
    label?: React.ReactNode;
}

const withCheckHOC = (OriginalComponent: React.FunctionComponent<any>) => {
    const NewComponent = (props: CheckHOCProps) => {
        const { isChecked, onChange, ...propsToFwd } = props;
        const [isCbChecked, setIsCbCheck] = useState(isChecked ?? false);
        useEffect(() => {
            if (typeof isChecked === 'boolean') {
                setIsCbCheck(isChecked);
            }
        }, [isChecked]);
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange instanceof Function) {
                onChange(e);
            } else setIsCbCheck(e.target.checked);
        };

        return (
            <OriginalComponent
                isChecked={isCbChecked}
                handleChange={handleChange}
                {...propsToFwd}
            />
        );
    };
    return NewComponent;
};

export default withCheckHOC;
