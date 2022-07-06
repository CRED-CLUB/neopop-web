import React from 'react';
import { fontNameSpaces } from '@primitives';
import { Pointer } from '@components/Helpers';
import Typography from '@components/Typography';
import { ButtonWrapper } from '../styles';
import { ButtonProps } from '../types';
import { getButtonColors, getSpacingConfig, getTextStyle } from '@primitives/buttons';

const ElevatedButton = (props: ButtonProps) => {
    const {
        variant = 'primary',
        colorMode = 'dark',
        kind = 'flat',
        size = 'medium',
        textStyle,
        colorConfig,
        spacingConfig,
        children,
        onTouchStart = () => {},
        ...propsToFwd
    } = props;
    const spacing = spacingConfig ?? getSpacingConfig(size);
    const colors = colorConfig ?? getButtonColors(colorMode, variant, kind);
    const customTextStyle = textStyle ?? getTextStyle(size) ?? fontNameSpaces.th14b;
    const textColor = propsToFwd.disabled
        ? colors?.disabledColors?.color
        : colors?.color;
    return (
        <ButtonWrapper
            colorConfig={colors}
            spacingConfig={spacing}
            textStyle={customTextStyle}
            color={textColor}
            onTouchStart={onTouchStart}
            {...propsToFwd}
        >
            <div className="button-face elevated">
                {propsToFwd.icon
                    ? <img
                        src={propsToFwd.icon}
                        className="icon"
                        alt="icon"
                    />
                    : null
                }
                <Typography
                    fontSize={customTextStyle?.fontSize}
                    fontType={customTextStyle?.fontType}
                    fontWeight={customTextStyle?.fontWeight}
                    color={textColor}
                >
                    {children}
                </Typography>
                {propsToFwd.showArrow
                    ? <Pointer
                        style={{ marginLeft: '10px' }}
                        color={textColor}
                    />
                    : null
                }
            </div>
            <div className="button-edge top" />
            <div className="button-edge left" />
            <div className="button-edge bottom" />
            <div className="button-edge right" />
        </ButtonWrapper>
    );
};

export default ElevatedButton;
