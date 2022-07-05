import React from 'react';
import { SliderProps } from './types';
import { SliderWrapper } from './styles';
import { SliderConfig, ThumbConfig } from '@primitives';
import { isEmpty } from '@utils';

const Slider = (props: SliderProps) => {
    const {
        min,
        max,
        step,
        defaultValue,
        value,
        onInput,
        onChange,
        style,
        sliderConfig,
        thumbConfig,
    } = props;

    const sliderUiConfig = isEmpty(sliderConfig) ? SliderConfig : sliderConfig;
    const thumbUiConfig = isEmpty(thumbConfig) ? ThumbConfig : thumbConfig;

    return (
        <SliderWrapper sliderConfig={sliderUiConfig} thumbConfig={thumbUiConfig}>
            <input
                className="slider"
                type="range"
                min={min}
                max={max}
                step={step}
                defaultValue={defaultValue}
                value={value}
                onInput={onInput}
                onChange={onChange}
                style={style}
            />
        </SliderWrapper>
    );
};

export default Slider;
