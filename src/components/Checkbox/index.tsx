import React from 'react';
import withCheckHOC from '@components/Helpers/withCheckHOC';
import { CheckmarkWrapper, CheckboxLabel } from './styles';
import { CheckboxProps } from './types';
import { colorGuide } from '@primitives';
import { Row, VerticalSpacer } from '@components/Helpers';
import { isEmpty } from '@utils';

const Checkbox = (props: CheckboxProps) => {
    const { isChecked, handleChange, colorConfig, colorMode, children, ...propsToFwd } = props;
    const defaultColorConfig =
        colorGuide[colorMode === 'light' ? 'lightComponents' : 'darkComponents'].checkbox;
    const checkboxColorConfig = isEmpty(colorConfig)
        ? defaultColorConfig
        : colorConfig ?? defaultColorConfig;

    return (
        <CheckboxLabel>
            <input {...propsToFwd} type="checkbox" checked={isChecked} onChange={handleChange} />
            <Row>
                <CheckmarkWrapper
                    colorConfig={checkboxColorConfig}
                    hasChildren={children ? true : false}
                    checked={isChecked}
                >
                    <span className="checkmark">
                        <svg
                            className="tick-svg"
                            width="10"
                            height="8"
                            viewBox="0 0 11 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.45456 3.99973L4.18183 6.72701L10.5455 1.27246"
                                stroke={checkboxColorConfig.background}
                                strokeWidth="1.36364"
                            />
                        </svg>
                    </span>
                </CheckmarkWrapper>
                {children ? (
                    <>
                        <VerticalSpacer n={3} />
                        {children}
                    </>
                ) : null}
            </Row>
        </CheckboxLabel>
    );
};

export default withCheckHOC(Checkbox);
