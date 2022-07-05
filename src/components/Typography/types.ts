export enum FontType {
    HEADING = 'heading',
    CAPS = 'caps',
    BODY = 'body',
    SERIF_HEADING = 'serif-heading',
}

export enum FontWeights {
    EXTRA_BOLD = 800,
    BOLD = 700,
    SEMI_BOLD = 600,
    MEDIUM = 500,
    REGULAR = 400,
    THIN = 300,
}

export enum FontOverflowType {
    ELLIPSIS = 'ellipsis',
    CLIP = 'clip',
}

export interface TypographyProps {
    /**
     * Typography Variant?
     */
    fontType: FontType;
    /**
     * Text Content?
     */
    children: React.ReactNode;
    /**
     * Text Color?
     */
    color?: string;
    /**
     * Font Weight?
     */
    fontWeight: FontWeights;
    /**
     * Font Size?
     */
    fontSize: number;
    /**
     * CSS Styles
     */
    style?: React.CSSProperties;
    /**
     * text-overflow?
     */
    overflow?: FontOverflowType;
    /**
     * ellipsis line-clamp?
     */
    lineClamp?: number;
    /**
     * as paragraph/span?
     */
    as?: 'p' | 'span';
}
