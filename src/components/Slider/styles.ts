import styled from 'styled-components';
import { SliderProps } from './types';

export const SliderWrapper = styled.div<Pick<SliderProps, 'sliderConfig' | 'thumbConfig'>>`
    .slider {
        outline: none;
        -webkit-appearance: none;
        width: ${({ sliderConfig }) => sliderConfig?.sliderWidth};
        height: ${({ sliderConfig }) => sliderConfig?.sliderHeight};
        background: ${({ sliderConfig }) => sliderConfig?.sliderBackground};
        transition: ${({ sliderConfig }) => sliderConfig?.sliderTransition};
    }
    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        cursor: pointer;
        width: ${({ thumbConfig }) => thumbConfig?.thumbWidth};
        height: ${({ thumbConfig }) => thumbConfig?.thumbHeight};
        background: ${({ thumbConfig }) => thumbConfig?.thumbBackground};
        background-size: ${({ thumbConfig }) => thumbConfig?.thumbBackgroundSize};
        border: ${({ thumbConfig }) => thumbConfig?.thumbBorder};
        background-color: ${({ thumbConfig }) => thumbConfig?.thumbBackgroundColor};
        border-radius: ${({ thumbConfig }) => thumbConfig?.thumbBorderRadius};
    }
    .slider::-moz-range-thumb {
        cursor: pointer;
        width: ${({ thumbConfig }) => thumbConfig?.thumbWidth};
        height: ${({ thumbConfig }) => thumbConfig?.thumbHeight};
        background: ${({ thumbConfig }) => thumbConfig?.thumbBackground};
        background-size: ${({ thumbConfig }) => thumbConfig?.thumbBackgroundSize};
        border: ${({ thumbConfig }) => thumbConfig?.thumbBorder};
        background-color: ${({ thumbConfig }) => thumbConfig?.thumbBackgroundColor};
        border-radius: ${({ thumbConfig }) => thumbConfig?.thumbBorderRadius};
    }
    .slider::-ms-thumb {
        cursor: pointer;
        width: ${({ thumbConfig }) => thumbConfig?.thumbWidth};
        height: ${({ thumbConfig }) => thumbConfig?.thumbHeight};
        background: ${({ thumbConfig }) => thumbConfig?.thumbBackground};
        background-size: ${({ thumbConfig }) => thumbConfig?.thumbBackgroundSize};
        border: ${({ thumbConfig }) => thumbConfig?.thumbBorder};
        background-color: ${({ thumbConfig }) => thumbConfig?.thumbBackgroundColor};
        border-radius: ${({ thumbConfig }) => thumbConfig?.thumbBorderRadius};
    }
`;
