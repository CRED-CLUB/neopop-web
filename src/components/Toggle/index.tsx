import React, { useRef } from 'react';
import withCheckHOC from '@components/Helpers/withCheckHOC';
import { ToggleBtn } from './styles';
import { ToggleProps } from './types';
import { colorGuide } from '@primitives';
import { isEmpty } from '@utils';

const Toggle = (props: ToggleProps) => {
    const { isChecked, handleChange, colorConfig, colorMode } = props;
    const defaultColorConfig =
        colorGuide[colorMode === 'light' ? 'lightComponents' : 'darkComponents'].toggle;
    const toggleRef = useRef<HTMLInputElement>(null);
    return (
        <ToggleBtn
            isChecked={isChecked}
            colorConfig={
                isEmpty(colorConfig) ? defaultColorConfig : colorConfig ?? defaultColorConfig
            }
            onClick={() => toggleRef?.current?.click()}
        >
            <input type="checkbox" ref={toggleRef} checked={isChecked} onChange={handleChange} />
            <div className="mark" />
        </ToggleBtn>
    );
};

export default withCheckHOC(Toggle);
