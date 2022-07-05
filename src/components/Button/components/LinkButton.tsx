import { FontVariant } from '@primitives';
import React from 'react';
import Typography from '../../Typography';
import { LinkButtonContainer } from '../styles';
import { ButtonProps } from '../types';

const LinkButton = (props: ButtonProps) => {
    const { children, textStyle = { ...FontVariant.BodyMedium11 }, color } = props;

    return (
        <LinkButtonContainer {...props}>
            <Typography {...textStyle} color={color}>
                {children}
            </Typography>
        </LinkButtonContainer>
    );
};

export default LinkButton;
