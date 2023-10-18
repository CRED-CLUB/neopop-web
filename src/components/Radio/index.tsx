import React, { useRef } from 'react';
import { StyledRadio, RadioLabel } from './styles';
import { RadioProps } from './types';
import { VerticalSpacer } from '@components/Helpers';
import withCheckHOC from '@components/Helpers/withCheckHOC';
import { colorGuide } from '@primitives';
import { isEmpty } from '@utils';

const Radio = (props: RadioProps) => {
    const { id, label, isChecked, handleChange, colorConfig, colorMode, ...propsToFwd } = props;
    const radioRef = useRef<HTMLInputElement>(null);
    const defaultColorConfig =
        colorGuide[colorMode === 'light' ? 'lightComponents' : 'darkComponents'].radio;

    const RadioStyledButton = () => (
        <StyledRadio
            onClick={(clickEvent) => {
                clickEvent.preventDefault();
                radioRef?.current?.click();
            }}
            onKeyDown={(clickEvent) => {
                const key = clickEvent.code;
                if (key === 'Enter' || key === 'Space') radioRef?.current?.click();
            }}
            colorConfig={
                isEmpty(colorConfig) ? defaultColorConfig : colorConfig ?? defaultColorConfig
            }
            tabIndex={0}
        >
            <input
                id={id}
                ref={radioRef}
                type="radio"
                checked={isChecked}
                onChange={handleChange}
                tabIndex={-1}
                {...propsToFwd}
            />
            <span className="checkmark"> </span>
        </StyledRadio>
    );

    if (label && colorConfig?.containerConfig) {
        return (
            <RadioLabel
                htmlFor={id}
                {...colorConfig?.containerConfig}
                className={isChecked ? 'selected' : ''}
            >
                <RadioStyledButton />
                <VerticalSpacer n={3} />
                <div className="label">{label}</div>
            </RadioLabel>
        );
    }
    return <RadioStyledButton />;
};

export default withCheckHOC(Radio);
