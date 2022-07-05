import { fontNameSpaces } from '@primitives';
import { getButtonColors, getSpacingConfig, getTextStyle } from '@primitives/buttons';
import React from 'react';

import { Pointer } from '../../Helpers';
import Typography from '../../Typography';
import { ButtonWrapper } from '../styles';
import { ButtonProps } from '../types';

const FlatButton = (props: ButtonProps) => {
    const {
        variant,
        colorMode,
        kind,
        size,
        textStyle,
        colorConfig,
        spacingConfig,
        children,
        onTouchStart = () => {},
        ...propsToFwd
    } = props;
    const spacing = spacingConfig ?? getSpacingConfig(size ?? 'medium');
    const colors =
        colorConfig ?? getButtonColors(colorMode ?? 'dark', variant ?? 'primary', kind ?? 'flat');
    const customTextStyle = textStyle ?? getTextStyle(size ?? 'medium') ?? fontNameSpaces.th14b;
    const textColor = propsToFwd.disabled ? colors?.disabledColors?.color : colors?.color;

    return (
        <ButtonWrapper
            colorConfig={colors}
            spacingConfig={spacing}
            textStyle={customTextStyle}
            color={textColor}
            onTouchStart={onTouchStart}
            {...propsToFwd}
        >
            <div className="button-face">
                {propsToFwd.icon ? <img src={propsToFwd.icon} className="icon" alt="icon" /> : null}
                <Typography
                    fontSize={customTextStyle?.fontSize}
                    fontType={customTextStyle?.fontType}
                    fontWeight={customTextStyle?.fontWeight}
                    color={textColor}
                >
                    {children}
                </Typography>
                {propsToFwd.showArrow ? (
                    <Pointer style={{ marginLeft: '10px' }} color={textColor} />
                ) : null}
            </div>
            <div className="button-edge left" />
            <div className="button-edge top" />
        </ButtonWrapper>
    );
};

export default FlatButton;
