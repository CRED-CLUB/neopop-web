import React from 'react';
import { ParagraphWrapper, SpanWrapper, TypographyWrapper } from './styles';
import { FontType, TypographyProps } from './types';

const Typography = (props: TypographyProps) => {
    const { children, style, as, ...details } = props;
    switch (as) {
        case 'p':
            return (
                <ParagraphWrapper
                    className={
                        details.fontType === FontType.SERIF_HEADING
                            ? 'font serif'
                            : 'font sans-serif'
                    }
                    style={style}
                    {...details}
                >
                    {children}
                </ParagraphWrapper>
            );
        case 'span':
            return (
                <SpanWrapper
                    className={
                        details.fontType === FontType.SERIF_HEADING
                            ? 'font serif'
                            : 'font sans-serif'
                    }
                    style={style}
                    {...details}
                >
                    {children}
                </SpanWrapper>
            );
        default:
            return (
                <TypographyWrapper
                    className={
                        details.fontType === FontType.SERIF_HEADING
                            ? 'font serif'
                            : 'font sans-serif'
                    }
                    style={style}
                    {...details}
                >
                    {children}
                </TypographyWrapper>
            );
    }
};

export default Typography;
