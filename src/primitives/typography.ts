// Font NameSpaces: t<1><2><3>
// 1:
// h for heading
// b for body
// sh for serif-heading
// c for caps
// 2:
// font size - eg: 12, 13, 14, ...
// 3:
// r - regular
// m - medium
// sb - semibold
// b - bold
// eb - extrabold

import { FontNameSpaceInterface, FontType, FontWeights } from '../types';

export const fontNameSpaces: { [key: string]: FontNameSpaceInterface } = {
    ...[44, 34, 28, 22, 20, 18, 16, 15, 14, 13].reduce(
        (accum: Record<string, object>, fontSize: number) => ({
            ...accum,
            [`th${fontSize}eb`]: {
                fontType: FontType.HEADING,
                fontSize,
                fontWeight: FontWeights.EXTRA_BOLD,
            },
        }),
        {},
    ),
    ...[34, 28, 22, 20, 18, 16, 14, 13, 11].reduce(
        (accum: Record<string, object>, fontSize: number) => ({
            ...accum,
            [`th${fontSize}b`]: {
                fontType: FontType.HEADING,
                fontSize,
                fontWeight: FontWeights.BOLD,
            },
        }),
        {},
    ),

    ...[22, 20, 18, 16, 14, 13, 12, 10].reduce(
        (accum: Record<string, object>, fontSize: number) => ({
            ...accum,
            [`th${fontSize}sb`]: {
                fontType: FontType.HEADING,
                fontSize,
                fontWeight: FontWeights.SEMI_BOLD,
            },
        }),
        {},
    ),

    ...[16, 15, 14, 13, 12, 11].reduce(
        (accum: Record<string, object>, fontSize: number) => ({
            ...accum,
            [`tb${fontSize}m`]: {
                fontType: FontType.BODY,
                fontSize,
                fontWeight: FontWeights.MEDIUM,
            },
        }),
        {},
    ),

    ...[16, 15, 14, 13, 12, 11].reduce(
        (accum: Record<string, object>, fontSize: number) => ({
            ...accum,
            [`tb${fontSize}r`]: {
                fontType: FontType.BODY,
                fontSize,
                fontWeight: FontWeights.REGULAR,
            },
        }),
        {},
    ),

    tc12eb: { fontType: FontType.CAPS, fontSize: 12, fontWeight: FontWeights.EXTRA_BOLD },
    tc10eb: { fontType: FontType.CAPS, fontSize: 10, fontWeight: FontWeights.EXTRA_BOLD },
    tc12b: { fontType: FontType.CAPS, fontSize: 12, fontWeight: FontWeights.BOLD },
    tc10b: { fontType: FontType.CAPS, fontSize: 10, fontWeight: FontWeights.BOLD },
    tc8b: { fontType: FontType.CAPS, fontSize: 8, fontWeight: FontWeights.BOLD },
    tc12sb: { fontType: FontType.CAPS, fontSize: 12, fontWeight: FontWeights.SEMI_BOLD },
    tc10sb: { fontType: FontType.CAPS, fontSize: 10, fontWeight: FontWeights.SEMI_BOLD },

    ...[36, 34, 32, 24, 22, 20, 18].reduce(
        (accum: Record<string, object>, fontSize: number) => ({
            ...accum,
            [`tsh${fontSize}b`]: {
                fontType: FontType.SERIF_HEADING,
                fontSize,
                fontWeight: FontWeights.BOLD,
            },
        }),
        {},
    ),
};

export const FontVariant: { [key: string]: FontNameSpaceInterface } = {
    HeadingExtraBold44: {
        fontType: FontType.HEADING,
        fontSize: 44,
        fontWeight: FontWeights.EXTRA_BOLD,
    },
    HeadingExtraBold34: {
        fontType: FontType.HEADING,
        fontSize: 34,
        fontWeight: FontWeights.EXTRA_BOLD,
    },
    HeadingExtraBold28: {
        fontType: FontType.HEADING,
        fontSize: 28,
        fontWeight: FontWeights.EXTRA_BOLD,
    },
    HeadingExtraBold22: {
        fontType: FontType.HEADING,
        fontSize: 22,
        fontWeight: FontWeights.EXTRA_BOLD,
    },
    HeadingExtraBold20: {
        fontType: FontType.HEADING,
        fontSize: 20,
        fontWeight: FontWeights.EXTRA_BOLD,
    },
    HeadingExtraBold18: {
        fontType: FontType.HEADING,
        fontSize: 18,
        fontWeight: FontWeights.EXTRA_BOLD,
    },
    HeadingExtraBold16: {
        fontType: FontType.HEADING,
        fontSize: 16,
        fontWeight: FontWeights.EXTRA_BOLD,
    },
    HeadingExtraBold15: {
        fontType: FontType.HEADING,
        fontSize: 15,
        fontWeight: FontWeights.EXTRA_BOLD,
    },
    HeadingExtraBold14: {
        fontType: FontType.HEADING,
        fontSize: 14,
        fontWeight: FontWeights.EXTRA_BOLD,
    },
    HeadingExtraBold13: {
        fontType: FontType.HEADING,
        fontSize: 13,
        fontWeight: FontWeights.EXTRA_BOLD,
    },
    HeadingBold34: { fontType: FontType.HEADING, fontSize: 34, fontWeight: FontWeights.BOLD },
    HeadingBold28: { fontType: FontType.HEADING, fontSize: 28, fontWeight: FontWeights.BOLD },
    HeadingBold22: { fontType: FontType.HEADING, fontSize: 22, fontWeight: FontWeights.BOLD },
    HeadingBold20: { fontType: FontType.HEADING, fontSize: 20, fontWeight: FontWeights.BOLD },
    HeadingBold18: { fontType: FontType.HEADING, fontSize: 18, fontWeight: FontWeights.BOLD },
    HeadingBold16: { fontType: FontType.HEADING, fontSize: 16, fontWeight: FontWeights.BOLD },
    HeadingBold14: { fontType: FontType.HEADING, fontSize: 14, fontWeight: FontWeights.BOLD },
    HeadingBold13: { fontType: FontType.HEADING, fontSize: 13, fontWeight: FontWeights.BOLD },
    HeadingBold11: { fontType: FontType.HEADING, fontSize: 11, fontWeight: FontWeights.BOLD },
    HeadingSemiBold22: {
        fontType: FontType.HEADING,
        fontSize: 22,
        fontWeight: FontWeights.SEMI_BOLD,
    },
    HeadingSemiBold20: {
        fontType: FontType.HEADING,
        fontSize: 20,
        fontWeight: FontWeights.SEMI_BOLD,
    },
    HeadingSemiBold18: {
        fontType: FontType.HEADING,
        fontSize: 18,
        fontWeight: FontWeights.SEMI_BOLD,
    },
    HeadingSemiBold16: {
        fontType: FontType.HEADING,
        fontSize: 16,
        fontWeight: FontWeights.SEMI_BOLD,
    },
    HeadingSemiBold14: {
        fontType: FontType.HEADING,
        fontSize: 14,
        fontWeight: FontWeights.SEMI_BOLD,
    },
    HeadingSemiBold13: {
        fontType: FontType.HEADING,
        fontSize: 13,
        fontWeight: FontWeights.SEMI_BOLD,
    },
    HeadingSemiBold12: {
        fontType: FontType.HEADING,
        fontSize: 12,
        fontWeight: FontWeights.SEMI_BOLD,
    },
    HeadingSemiBold10: {
        fontType: FontType.HEADING,
        fontSize: 10,
        fontWeight: FontWeights.SEMI_BOLD,
    },
    BodyMedium16: { fontType: FontType.BODY, fontSize: 16, fontWeight: FontWeights.MEDIUM },
    BodyMedium15: { fontType: FontType.BODY, fontSize: 15, fontWeight: FontWeights.MEDIUM },
    BodyMedium14: { fontType: FontType.BODY, fontSize: 14, fontWeight: FontWeights.MEDIUM },
    BodyMedium13: { fontType: FontType.BODY, fontSize: 13, fontWeight: FontWeights.MEDIUM },
    BodyMedium12: { fontType: FontType.BODY, fontSize: 12, fontWeight: FontWeights.MEDIUM },
    BodyMedium11: { fontType: FontType.BODY, fontSize: 11, fontWeight: FontWeights.MEDIUM },
    BodyRegular16: { fontType: FontType.BODY, fontSize: 16, fontWeight: FontWeights.REGULAR },
    BodyRegular15: { fontType: FontType.BODY, fontSize: 15, fontWeight: FontWeights.REGULAR },
    BodyRegular14: { fontType: FontType.BODY, fontSize: 14, fontWeight: FontWeights.REGULAR },
    BodyRegular13: { fontType: FontType.BODY, fontSize: 13, fontWeight: FontWeights.REGULAR },
    BodyRegular12: { fontType: FontType.BODY, fontSize: 12, fontWeight: FontWeights.REGULAR },
    BodyRegular11: { fontType: FontType.BODY, fontSize: 11, fontWeight: FontWeights.REGULAR },
    CapsExtraBold12: { fontType: FontType.CAPS, fontSize: 12, fontWeight: FontWeights.EXTRA_BOLD },
    CapsExtraBold10: { fontType: FontType.CAPS, fontSize: 10, fontWeight: FontWeights.EXTRA_BOLD },
    CapsBold12: { fontType: FontType.CAPS, fontSize: 12, fontWeight: FontWeights.BOLD },
    CapsBold10: { fontType: FontType.CAPS, fontSize: 10, fontWeight: FontWeights.BOLD },
    CapsBold8: { fontType: FontType.CAPS, fontSize: 8, fontWeight: FontWeights.BOLD },
    CapsSemiBold12: { fontType: FontType.CAPS, fontSize: 12, fontWeight: FontWeights.SEMI_BOLD },
    CapsSemiBold10: { fontType: FontType.CAPS, fontSize: 10, fontWeight: FontWeights.SEMI_BOLD },
    CirkaHeadingBold36: {
        fontType: FontType.SERIF_HEADING,
        fontSize: 36,
        fontWeight: FontWeights.BOLD,
    },
    CirkaHeadingBold34: {
        fontType: FontType.SERIF_HEADING,
        fontSize: 34,
        fontWeight: FontWeights.BOLD,
    },
    CirkaHeadingBold32: {
        fontType: FontType.SERIF_HEADING,
        fontSize: 32,
        fontWeight: FontWeights.BOLD,
    },
    CirkaHeadingBold24: {
        fontType: FontType.SERIF_HEADING,
        fontSize: 24,
        fontWeight: FontWeights.BOLD,
    },
    CirkaHeadingBold22: {
        fontType: FontType.SERIF_HEADING,
        fontSize: 22,
        fontWeight: FontWeights.BOLD,
    },
    CirkaHeadingBold20: {
        fontType: FontType.SERIF_HEADING,
        fontSize: 20,
        fontWeight: FontWeights.BOLD,
    },
    CirkaHeadingBold18: {
        fontType: FontType.SERIF_HEADING,
        fontSize: 18,
        fontWeight: FontWeights.BOLD,
    },
};

export const typographyGuide = {
    back: {
        heading: FontVariant.HeadingSemiBold14,
    },
    header: {
        heading: FontVariant.CirkaHeadingBold24,
        description: FontVariant.BodyMedium14,
    },
    containerCard: {
        heading: FontVariant.HeadingBold14,
        description: FontVariant.BodyMedium13,
    },
    bottomSheet: {},
    tags: {
        containerText: FontVariant.CapsBold8,
        noContainerText: FontVariant.CapsBold10,
    },
    searchBar: {
        input: FontVariant.HeadingSemiBold13,
    },
    buttons: {
        big: FontVariant.HeadingBold14,
        medium: FontVariant.HeadingBold13,
        small: FontVariant.HeadingBold11,
    },
    checkbox: {},
    toast: {
        heading: FontVariant.HeadingSemiBold13,
        description: FontVariant.BodyRegular11,
    },
    inputFields: {
        label: FontVariant.CapsBold8,
        text: FontVariant.HeadingBold22,
    },
};
