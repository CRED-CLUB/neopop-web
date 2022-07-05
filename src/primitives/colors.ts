import { hexToRGBA, mergeDeep } from '../utils';
import { FontOpacity } from './opacity';

export let mainColors = Object.freeze({
    black: '#0d0d0d',
    white: '#ffffff',
    red: '#EE4D37',
    yellow: '#F08D32',
    blue: '#144CC7',
    green: '#06C270',
});

export let colorPalette = Object.freeze({
    white: {
        50: '#E0E0E0',
        70: '#EFEFEF',
        90: '#FBFBFB',
    },
    popWhite: {
        100: '#D2D2D2',
        200: '#E0E0E0',
        300: '#EFEFEF',
        400: '#FBFBFB',
        500: '#ffffff',
    },
    popBlack: {
        100: '#8A8A8A',
        200: '#3D3D3D',
        300: '#161616',
        400: '#121212',
        500: '#0d0d0d',
    },
    black: {
        50: '#8A8A8A',
        70: '#3D3D3D',
        90: '#161616',
        100: '#121212',
    },
    poliPurple: {
        100: '#E8DFFF',
        200: '#D2C2FF',
        300: '#B49AFF',
        400: '#9772FF',
        500: '#6A35FF',
        600: '#4A25B3',
        700: '#351A80',
        800: '#20104D',
    },
    orangeSunshine: {
        100: '#FFEFE6',
        200: '#FFDBC7',
        300: '#FFC3A2',
        400: '#FFAB7C',
        500: '#FF8744',
        600: '#B35F30',
        700: '#804322',
        800: '#4D2914',
    },
    parkGreen: {
        100: '#DDFFF1',
        200: '#C4FFE6',
        300: '#9DFFD6',
        400: '#76FFC6',
        500: '#3BFFAD',
        600: '#29B379',
        700: '#1E8057',
        800: '#124D34',
    },
    pinkPong: {
        100: '#FFE1E9',
        200: '#FFC6D4',
        300: '#FFA0B7',
        400: '#FF7B9A',
        500: '#FF426F',
        600: '#B32E4E',
        700: '#802138',
        800: '#4D1421',
    },
    mannna: {
        100: '#FFF8E5',
        200: '#FFEFC7',
        300: '#FFE5A2',
        400: '#FFDB7D',
        500: '#FFCB45',
        600: '#B38E30',
        700: '#806623',
        800: '#4D3D15',
    },
    neoPaccha: {
        100: '#FBFFE6',
        200: '#F7FFC6',
        300: '#F2FF9F',
        400: '#EDFE79',
        500: '#E5FE40',
        600: '#A0B22D',
        700: '#727F20',
        800: '#454C13',
    },
    yoyo: {
        100: '#F4E5FF',
        200: '#E5C5FF',
        300: '#D59FFF',
        400: '#C379FF',
        500: '#AA3FFF',
        600: '#772CB3',
        700: '#552080',
        800: '#33134D',
    },
    error: {
        100: '#FCE2DD',
        200: '#F6A69B',
        300: '#F47564',
        400: '#F05E4B',
        500: '#EE4D37',
    },
    warning: {
        100: '#FBDDC2',
        200: '#F8C699',
        300: '#F5AC6A',
        400: '#F29947',
        500: '#F08D32',
    },
    info: {
        100: '#C2D0F2',
        200: '#89A5E3',
        300: '#3F6FD9',
        400: '#2C5ECD',
        500: '#144CC7',
    },
    success: {
        100: '#E6F9F1',
        200: '#83E0B8',
        300: '#4FE3A3',
        400: '#1FC87F',
        500: '#06C270',
    },
});

const getDarkThemedColors = () => ({
    font: {
        heading: hexToRGBA(mainColors.white, FontOpacity.HEADING),
        subHeading: hexToRGBA(mainColors.white, FontOpacity.SUB_HEADING),
        bodyText: hexToRGBA(mainColors.white, FontOpacity.BODY_TEXT),
        bodyTextLighter: hexToRGBA(mainColors.white, FontOpacity.BODY_TEXT_LIGHTER),
    },
    containerCard: {
        background: colorPalette.black[100],
        stroke: 'rgba(255,255,255,0.1)',
    },
    bottomSheet: {},
    toast: {
        success: {
            background: mainColors.green,
            color: '#F8F8F8',
        },
        warning: {
            background: mainColors.yellow,
            color: '#F8F8F8',
        },
        error: {
            background: mainColors.red,
            color: '#F8F8F8',
        },
    },
    searchBar: {
        border: colorPalette.black[70],
        activeBorder: mainColors.white,
        backgroundColor: colorPalette.popBlack[400],
        closeIcon: colorPalette.popWhite[100],
    },
    tags: {
        warning: {
            background: mainColors.yellow,
            color: colorPalette.white[90],
        },
        error: {
            background: mainColors.red,
            color: colorPalette.white[90],
        },
        success: {
            background: mainColors.green,
            color: colorPalette.white[90],
        },
        info: {
            background: mainColors.blue,
            color: colorPalette.white[90],
        },
    },
    checkbox: {
        background: mainColors.black,
        border: mainColors.white,
        leftPlunk: colorPalette.black[50],
        topPlunk: colorPalette.black[70],
    },
    inputFields: {
        textColor: hexToRGBA(mainColors.white, FontOpacity.HEADING),
        labelColor: hexToRGBA(mainColors.white, FontOpacity.BODY_TEXT),
        caretColor: mainColors.blue,
        errorColor: mainColors.red,
        placeholderColor: hexToRGBA(mainColors.white, 0.3),
    },
    toggle: {
        on: {
            switchBackground: '#B4EDD4',
            switchBorder: mainColors.white,
            buttonBackground: '#38b36f',
            buttonBorder: '#B4EDD4',
            buttonMarkBackground: mainColors.white,
        },
        off: {
            switchBackground: '#0a0a0a',
            switchBorder: mainColors.white,
            buttonBackground: mainColors.white,
            buttonBorder: '#0a0a0a',
            buttonMarkBackground: colorPalette.white[50],
        },
    },
    radio: {
        background: mainColors.black,
        border: mainColors.white,
        plunk: colorPalette.black[50],
        dotBackground: mainColors.black,
        containerConfig: {
            color: mainColors.white,
            backgroundColor: colorPalette.black[100],
            borderColor: hexToRGBA(mainColors.white, 0.1),
            activeBackgroundColor: colorPalette.poliPurple[500],
            activeBorderColor: '#2C5ECD',
        },
    },
    dropdown: {
        withLabel: {
            text: hexToRGBA(mainColors.white, 0.5),
            border: hexToRGBA(mainColors.white, 0.1),
            chevron: hexToRGBA(mainColors.white, 0.5),
        },
        withoutLabel: {
            text: hexToRGBA(mainColors.white, 0.5),
            border: mainColors.white,
            chevron: mainColors.white,
        },
    },
    scoremeter: {
        meterStrokeColor: {
            excellent: mainColors.green,
            average: colorPalette.neoPaccha[400],
            poor: colorPalette.warning[400],
        },
        meterStrokeBackground: mainColors.black,
        meterBorderColor: colorPalette.popBlack[200],
        dotColor: '',
        indicatorColors: {
            neutral: '#e2e2e2',
            increment: '#5CDDBE',
            decrement: '#FFB098',
        },
        scoreContainerBackground: colorPalette.popBlack[300],
        scoreContainerBorder: mainColors.black,
        scoreColor: mainColors.white,
    },
    buttons: {
        primary: {
            backgroundColor: mainColors.black,
            color: mainColors.white,
            edgeColors: {
                bottom: colorPalette.black[70],
                right: colorPalette.black[50],
                top: colorPalette.popBlack[200],
                left: colorPalette.popBlack[100],
            },
            disabledColors: {
                backgroundColor: colorPalette.black[50],
                color: hexToRGBA(mainColors.white, 0.5),
                edgeColors: {
                    top: 'transparent',
                    left: 'transparent',
                    right: colorPalette.white[70],
                    bottom: colorPalette.white[50],
                },
            },
        },
        secondary: {
            backgroundColor: mainColors.white,
            color: mainColors.black,
            borderColor: mainColors.black,
            edgeColors: {
                bottom: colorPalette.black[50],
                right: colorPalette.white[50],
                left: colorPalette.white[50],
                top: '#C7C7C7',
            },
            disabledColors: {
                backgroundColor: mainColors.white,
                color: hexToRGBA(mainColors.black, 0.3),
                borderColor: hexToRGBA(mainColors.black, 0.3),
                edgeColors: {
                    top: 'transparent',
                    left: 'transparent',
                    right: 'transparent',
                    bottom: 'transparent',
                },
            },
        },
    },
});

const getLightThemedColors = () => ({
    font: {
        heading: hexToRGBA(mainColors.black, FontOpacity.HEADING),
        subHeading: hexToRGBA(mainColors.black, FontOpacity.SUB_HEADING),
        bodyText: hexToRGBA(mainColors.black, FontOpacity.BODY_TEXT),
        bodyTextLighter: hexToRGBA(mainColors.black, FontOpacity.BODY_TEXT_LIGHTER),
    },
    containerCard: {
        background: colorPalette.black[100],
        stroke: 'rgba(255,255,255,0.1)',
    },
    searchBar: {
        border: colorPalette.white[50],
        activeBorder: mainColors.black,
        backgroundColor: mainColors.white,
        closeIcon: colorPalette.white[50],
    },
    bottomSheet: {},
    toast: {
        success: {
            background: mainColors.green,
            color: '#F8F8F8',
        },
        warning: {
            background: mainColors.yellow,
            color: '#F8F8F8',
        },
        error: {
            background: mainColors.red,
            color: '#F8F8F8',
        },
    },
    dropdown: {
        withLabel: {
            text: hexToRGBA(mainColors.black, 0.5),
            border: hexToRGBA(mainColors.black, 0.1),
            chevron: hexToRGBA(mainColors.black, 0.5),
        },
        withoutLabel: {
            text: hexToRGBA(mainColors.black, 0.5),
            border: mainColors.black,
            chevron: mainColors.black,
        },
    },
    scoremeter: {
        meterStrokeColor: {
            excellent: mainColors.green,
            average: colorPalette.neoPaccha[400],
            poor: colorPalette.warning[400],
        },
        meterStrokeBackground: 'transparent',
        meterBorderColor: colorPalette.popWhite[200],
        dotColor: colorPalette.popBlack[300],
        indicatorColors: {
            neutral: '#e2e2e2',
            increment: '#5CDDBE',
            decrement: '#FFB098',
        },
        scoreContainerBackground: colorPalette.popWhite[300],
        scoreContainerBorder: colorPalette.popWhite[400],
        scoreColor: mainColors.black,
    },
    tags: {
        warning: {
            background: '#FEF4EB',
            color: mainColors.yellow,
        },
        error: {
            background: '#FDEDEB',
            color: mainColors.red,
        },
        success: {
            background: '#E6F9F1',
            color: mainColors.green,
        },
        info: {
            background: '#EBF1FE',
            color: mainColors.blue,
        },
    },
    checkbox: {
        background: mainColors.white,
        border: mainColors.black,
        leftPlunk: colorPalette.black[50],
        topPlunk: colorPalette.white[50],
    },
    inputFields: {
        textColor: hexToRGBA(mainColors.black, FontOpacity.HEADING),
        labelColor: hexToRGBA(mainColors.black, FontOpacity.BODY_TEXT),
        caretColor: mainColors.blue,
        errorColor: mainColors.red,
        placeholderColor: hexToRGBA(mainColors.black, 0.3),
    },
    buttons: {
        primary: {
            backgroundColor: mainColors.white,
            color: mainColors.black,
            edgeColors: {
                bottom: colorPalette.black[50],
                right: colorPalette.white[50],
                top: colorPalette.popBlack[200],
                left: colorPalette.popBlack[100],
            },
            disabledColors: {
                backgroundColor: colorPalette.popBlack[100],
                color: hexToRGBA(mainColors.white, 0.5),
                edgeColors: {
                    top: 'transparent',
                    left: 'transparent',
                    right: '#B6B6B6',
                    bottom: colorPalette.popBlack[200],
                },
            },
        },
        secondary: {
            backgroundColor: mainColors.black,
            color: mainColors.white,
            borderColor: mainColors.white,
            edgeColors: {
                bottom: colorPalette.black[50],
                top: '#262626',
                right: colorPalette.white[50],
                left: '#404040',
            },
            disabledColors: {
                backgroundColor: mainColors.black,
                color: hexToRGBA(mainColors.white, 0.3),
                borderColor: hexToRGBA(mainColors.white, 0.3),
                edgeColors: {
                    top: 'transparent',
                    left: 'transparent',
                    right: 'transparent',
                    bottom: 'transparent',
                },
            },
        },
    },
    toggle: {
        on: {
            switchBackground: '#CAFFE2',
            switchBorder: '#0a0a0a',
            buttonBackground: '#38b36f',
            buttonBorder: '#F7F7F7',
            buttonMarkBackground: mainColors.white,
        },
        off: {
            switchBackground: mainColors.white,
            switchBorder: '#0a0a0a',
            buttonBackground: colorPalette.white[50],
            buttonBorder: mainColors.white,
            buttonMarkBackground: mainColors.white,
        },
    },
    radio: {
        background: mainColors.white,
        border: mainColors.black,
        plunk: colorPalette.black[50],
        dotBackground: mainColors.white,
        containerConfig: {
            color: mainColors.black,
            backgroundColor: colorPalette.black[100],
            borderColor: hexToRGBA(mainColors.white, 0.1),
            activeBackgroundColor: colorPalette.poliPurple[500],
            activeBorderColor: '#2C5ECD',
        },
    },
});

const getColorGuide = () => ({
    mainAppBackground: mainColors.black,
    darkComponents: getDarkThemedColors(),
    lightComponents: getLightThemedColors(),
});

export let colorGuide = getColorGuide();

interface UserTheme {
    mainColors?: typeof mainColors;
    colorGuide?: typeof colorGuide;
    colorPalette?: typeof colorPalette;
}

export const extend = (themeOverwrite: UserTheme) => {
    const {
        mainColors: userMainColors = {},
        colorGuide: userColorGuide = {},
        colorPalette: userColorPalette = {},
    } = themeOverwrite;

    mainColors = Object.freeze(mergeDeep({}, mainColors, userMainColors));
    colorPalette = Object.freeze(mergeDeep({}, colorPalette, userColorPalette));
    colorGuide = Object.freeze(mergeDeep({}, getColorGuide(), userColorGuide));
};
