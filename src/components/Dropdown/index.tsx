import React from 'react';
import { Chevron, VerticalSpacer } from '../Helpers';
import Typography from '@components/Typography';
import { colorGuide, fontNameSpaces } from '@primitives';
import { Directions } from '@types';
import { DropdownContainer } from './styles';
import { DropdownProps } from './types';
import { isEmpty } from '@utils';

const Dropdown = (props: DropdownProps) => {
    const { onClick, label, colorConfig, colorMode } = props;
    const defaultColorConfig =
        colorGuide[colorMode === 'light' ? 'lightComponents' : 'darkComponents'].dropdown[
            label ? 'withLabel' : 'withoutLabel'
        ];
    const dropdownColorConfig = isEmpty(colorConfig)
        ? defaultColorConfig
        : colorConfig ?? defaultColorConfig;

    return (
        <DropdownContainer
            className={label ? '' : 'no-label'}
            {...dropdownColorConfig}
            onClick={onClick}
        >
            {label ? (
                <>
                    <Typography
                        {...fontNameSpaces.th13sb}
                        color={dropdownColorConfig?.text ?? 'rgba(255,255,255,0.5)'}
                    >
                        {label}
                    </Typography>
                    <VerticalSpacer n={2} />
                </>
            ) : null}
            <Chevron
                direction={Directions.SOUTH}
                color={dropdownColorConfig?.chevron ?? 'rgba(255,255,255,0.5)'}
            />
        </DropdownContainer>
    );
};

export default Dropdown;
