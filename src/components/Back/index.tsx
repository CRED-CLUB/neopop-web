import React from 'react';
import { mainColors, typographyGuide } from '@primitives';
import { Row, VerticalSpacer } from '@components/Helpers';
import Typography from '../Typography';
import { BackProps } from './types';

const Back = (props: BackProps) => {
    const {
        heading,
        color,
        textStyle = { ...typographyGuide.back.heading },
        rightElement,
        onClick,
    } = props;

    return (
        <Row className="h-center" style={{ padding: '12px 0px' }}>
            <Row className="h-center">
                <Row className="h-center" style={{ height: '36px' }} onClick={onClick}>
                    <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
                        <path
                            d="M31 6L0.999999 6"
                            stroke={color ?? mainColors.white}
                            strokeWidth="1.5"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7 12C7 8.68629 4.31371 6 1 6"
                            stroke={color ?? mainColors.white}
                            strokeWidth="1.5"
                        />
                        <path
                            d="M1 6C4.31371 6 7 3.31371 7 0"
                            stroke={color ?? mainColors.white}
                            strokeWidth="1.5"
                        />
                    </svg>
                </Row>
                <VerticalSpacer n={4} />
                {heading ? (
                    <Typography {...textStyle} color={color ?? mainColors.white}>
                        {heading}
                    </Typography>
                ) : null}
            </Row>
            <div style={{ marginLeft: 'auto' }}>{rightElement ?? null}</div>
        </Row>
    );
};

export default Back;
