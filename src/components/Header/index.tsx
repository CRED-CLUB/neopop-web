import React from 'react';
import { FontOpacity, mainColors, typographyGuide } from '@primitives';
import Back from '@components/Back';
import { Column } from '@components/Helpers';
import Typography from '@components/Typography';
import { HeaderProps } from './types';

const Header = (props: HeaderProps) => {
    const { header } = typographyGuide;
    const {
        heading,
        textStyle = { heading: header.heading, description: header.description },
        color,
        description,
        onBackClick,
    } = props;
    const fallbackColor = color ?? mainColors.white;

    return (
        <Column>
            <Back onClick={onBackClick} color={fallbackColor} />
            {heading ? (
                <div style={{ paddingTop: '10px' }}>
                    <Typography
                        {...textStyle.heading}
                        style={{ maxWidth: '75%', opacity: FontOpacity.HEADING }}
                        color={fallbackColor}
                    >
                        {heading}
                    </Typography>
                </div>
            ) : (
                ''
            )}
            {description ? (
                <div style={{ paddingTop: '5px' }}>
                    <Typography
                        {...textStyle.description}
                        style={{ maxWidth: '75%', opacity: FontOpacity.BODY_TEXT }}
                        color={fallbackColor}
                    >
                        {description}
                    </Typography>
                </div>
            ) : (
                ''
            )}
        </Column>
    );
};

export default Header;
