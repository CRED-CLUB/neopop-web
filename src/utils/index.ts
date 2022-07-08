import { css } from 'styled-components';
import { FontType, FontWeights } from '@types';

export const hexToRGBA = (hex: string, alpha: string | number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (alpha) return `rgba(${r},${g},${b}, ${alpha})`;
    return `rgb(${r},${g},${b})`;
};

export const isEmpty = (value: any) =>
    value === undefined ||
    value === null ||
    (typeof value === 'string' && value.trim() === '') ||
    (Array.isArray(value) && value.length === 0) ||
    (value?.constructor?.name === 'Object' && Object.keys(value).length === 0) ||
    ((value?.constructor?.name === 'Map' || value?.constructor?.name === 'Set') &&
        value.size === 0);

const Currencies: { [key: string]: any } = {
    dollar: {
        countryCode: 'US',
        currency: 'USD',
    },
    inr: {
        countryCode: 'IN',
        currency: 'INR',
    },
};

export const currencyFormatter = (
    rupees: number | string,
    fallback = '',
    minimumFractionDigits = 0,
    cur = 'inr',
) => {
    const formatNumber = Number(rupees);
    if ((formatNumber !== 0 && !formatNumber) || Number.isNaN(formatNumber)) {
        if (fallback) return fallback;
        return '';
    }
    // console.log(cur);
    if (window?.Intl) {
        const obj = Currencies[cur];

        if (obj) {
            return new Intl.NumberFormat(`en-${obj.countryCode}`, {
                style: 'currency',
                currency: `${obj.currency}`,
                minimumFractionDigits: minimumFractionDigits,
                maximumFractionDigits: 2,
            })
                .format(formatNumber)
                .replace(/\s/g, '');
        }
    }
    return formatNumber;
};

export const generateTextStyle = (
    type = FontType.BODY,
    fontSize = 14,
    fontWeight = FontWeights.REGULAR,
    color = '#FFFFFF',
) => {
    const LINE_HEIGHT_MULTIPLIER = {
        [FontType.HEADING]: 1.25,
        [FontType.CAPS]: 1.25,
        [FontType.BODY]: 1.5,
        [FontType.SERIF_HEADING]: 1.25,
    };

    const getLetterSpacing = (fType: FontType, fSize: number, fWeight: FontWeights) => {
        switch (fType) {
            case FontType.HEADING:
                switch (fWeight) {
                    case FontWeights.EXTRA_BOLD:
                        return fSize >= 44 ? 0 : 0.2;
                    case FontWeights.BOLD:
                        return fSize >= 13 ? 0.2 : 0.4;
                    case FontWeights.SEMI_BOLD:
                        return fSize >= 18 ? 0.2 : 0.4;
                    default:
                        return 0.2;
                }
            case FontType.CAPS:
                if (fSize > 8) return 2;
                return 1;
            case FontType.BODY:
                return 0.4;
            case FontType.SERIF_HEADING:
                return 0.2;
            default:
                return 0.4;
        }
    };

    const letterSpacing = getLetterSpacing(type, fontSize, fontWeight);

    return css`
        font-size: ${fontSize}px;
        font-style: normal;
        font-weight: ${fontWeight};
        line-height: ${Math.round(fontSize * LINE_HEIGHT_MULTIPLIER[type])}px;
        letter-spacing: ${letterSpacing}px;
        color: ${color ?? ''};
        ${type === FontType.CAPS
            ? css`
                  text-transform: uppercase;
              `
            : ''}
    `;
};

export function getRandomInt(min: number, max: number): number {
    const minN = Math.ceil(min);
    const maxN = Math.floor(max);
    return Math.floor(Math.random() * (maxN - minN + 1)) + minN;
}

export const isImageLoaded = (src: string) =>
    new Promise((resolve, reject) => {
        const image = new Image();
        image.src = src;
        image.addEventListener('load', () => {
            resolve(true);
        });
        image.addEventListener('error', () => {
            reject();
        });
    });

function isObject(item: any): boolean {
    return item instanceof Object && !Array.isArray(item);
}

export function mergeDeep(target: any, ...sources: any[]): any {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return mergeDeep(target, ...sources);
}
