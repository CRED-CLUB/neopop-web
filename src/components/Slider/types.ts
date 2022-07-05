import React from 'react';

export interface ThumbConfig {
    thumbWidth?: string;
    thumbHeight?: string;
    thumbBackground?: string;
    thumbBackgroundSize?: string;
    thumbBackgroundColor?: string;
    thumbBorder?: string;
    thumbBorderRadius?: string;
}

export interface SliderConfig {
    sliderWidth?: string;
    sliderHeight?: string;
    sliderBackground?: string;
    sliderTransition?: string;
}
export interface SliderProps {
    min: number;
    max: number;
    step: number;
    sliderConfig?: SliderConfig;
    thumbConfig?: ThumbConfig;
    defaultValue?: number;
    value?: number;
    onInput?: React.ChangeEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    style?: React.CSSProperties;
}
