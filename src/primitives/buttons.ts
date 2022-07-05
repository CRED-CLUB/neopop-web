// Font NameSpaces: b<1><2><3><4><5>
// 1:
// d for dark
// l for light

// 2:
// p for primary
// s for secondary

// 3:
// size - 50, 40, 30

// 4:
// p - plunk (elevated)
// f - flat

// 5:
// 0 -> don't add arrow
// 1 -> add arrow

import { colorGuide } from './colors';
import { typographyGuide } from './typography';
import { ButtonModes, ButtonKinds, ButtonVariants, ButtonSizes } from '../types';

const buttonTypography = typographyGuide.buttons;

export const getButtonColors = (mode: ButtonModes, variant: ButtonVariants, kind: ButtonKinds) => {
    const colors =
        mode === 'dark' ? colorGuide.darkComponents.buttons : colorGuide.lightComponents.buttons;
    const transparentEdge =
        kind === 'elevated'
            ? {
                  top: 'transparent',
                  left: 'transparent',
              }
            : {};

    return variant === 'primary'
        ? {
              ...colors.primary,
              mode,
              edgeColors: { ...colors.primary.edgeColors, ...transparentEdge },
          }
        : {
              ...colors.secondary,
              mode,
              edgeColors: { ...colors.secondary.edgeColors, ...transparentEdge },
          };
};

const getSize = (number: string) => {
    switch (number) {
        case '50':
            return 'big';

        case '40':
            return 'medium';

        case '30':
            return 'small';
        default:
            return 'medium';
    }
};

const sizeConfig = {
    big: {
        height: '50px',
        padding: '0px 30px',
        iconHeight: '20px',
    },
    medium: {
        height: '40px',
        padding: '0px 20px',
        iconHeight: '16px',
    },
    small: {
        height: '30px',
        padding: '0px 25px',
        iconHeight: '14px',
    },
};

export const getSpacingConfig = (size: ButtonSizes) => {
    switch (size) {
        case 'big':
            return sizeConfig.big;
        case 'medium':
            return sizeConfig.medium;
        case 'small':
            return sizeConfig.small;
        default:
            return sizeConfig.medium;
    }
};

export const getTextStyle = (size: ButtonSizes) => {
    switch (size) {
        case 'big':
            return buttonTypography.big;
        case 'medium':
            return buttonTypography.medium;
        case 'small':
            return buttonTypography.small;
        default:
            return buttonTypography.medium;
    }
};

/** ****************************************************************************************** */
// New Configs

export const getButtonConfig = (name: string) => {
    const colorMode = name.slice(1, 2) === 'l' ? 'light' : 'dark';
    const variant = name.slice(2, 3) === 's' ? 'secondary' : 'primary';
    const size = name.slice(3, 5);
    const kind = name.slice(5, 6) === 'p' ? 'elevated' : 'flat';
    const arrow = name.slice(6, 7);
    const config = {
        colorConfig: getButtonColors(colorMode, variant, kind),
        spacingConfig: getSpacingConfig(getSize(size)),
        colorMode,
        size,
        kind,
        variant,
        showArrow: Boolean(Number(arrow)),
    };
    return config;
};
