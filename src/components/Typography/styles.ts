import styled, { css } from 'styled-components';
import { generateTextStyle } from '@utils';
import { TypographyProps } from './types';

export const TypographyWrapper = styled.div<TypographyProps>`
    ${(props) => generateTextStyle(props.fontType, props.fontSize, props.fontWeight, props.color)};
    ${(props) =>
        props.overflow &&
        css`
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ${props.overflow};
        `};
    ${(props) =>
        props.overflow &&
        props.lineClamp &&
        css`
            display: -webkit-box;
            -webkit-line-clamp: ${props.lineClamp ?? 1};
            -webkit-box-orient: vertical;
            white-space: break-spaces;
        `};
`;

export const ParagraphWrapper = styled.p<TypographyProps>`
    ${(props) => generateTextStyle(props.fontType, props.fontSize, props.fontWeight, props.color)};
    ${(props) =>
        props.overflow &&
        css`
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ${props.overflow};
        `};
    ${(props) =>
        props.overflow &&
        props.lineClamp &&
        css`
            display: -webkit-box;
            -webkit-line-clamp: ${props.lineClamp ?? 1};
            -webkit-box-orient: vertical;
            white-space: break-spaces;
        `};
`;

export const SpanWrapper = styled.span<TypographyProps>`
    ${(props) => generateTextStyle(props.fontType, props.fontSize, props.fontWeight, props.color)};
    ${(props) =>
        props.overflow &&
        css`
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ${props.overflow};
        `};
    ${(props) =>
        props.overflow &&
        props.lineClamp &&
        css`
            display: -webkit-box;
            -webkit-line-clamp: ${props.lineClamp ?? 1};
            -webkit-box-orient: vertical;
            white-space: break-spaces;
        `};
`;
