interface IndicatorColors {
    neutral?: string;
    increment?: string;
    decrement?: string;
}

export const LOWER_THRESHOLD = 0;
export const DEFAULT_MODE = 'dark';
export const DEFAULT_TYPE = 'excellent';
export interface ScoremeterColorConfig {
    meterStrokeColor: {
        excellent: string;
        average: string;
        poor: string;
    };
    meterStrokeBackground?: string;
    meterBorderColor?: string;
    dotColor?: string;
    indicatorColors?: IndicatorColors;
    scoreContainerBackground?: string;
    scoreContainerBorder?: string;
    scoreColor?: string;
}

export type ScoremeterModes = 'dark' | 'light';

export type ScoremeterTypes = 'excellent' | 'average' | 'poor';
export interface ScoremeterProps {
    reading: number;
    colorMode?: ScoremeterModes;
    type?: ScoremeterTypes;
    colorConfig?: ScoremeterColorConfig;
    scoreDesc?: string;
    showIndicators?: boolean;
    oldReading: number;
    lowerLimit?: number;
    upperLimit?: number;
    showLegends?: boolean;
}
