interface EdgeColors {
    bottom: string;
    right: string;
}

export interface CardEdgeProps {
    edgeColors?: EdgeColors;
}

export interface CardProps extends CardEdgeProps {
    children: React.ReactNode;
    backgroundColor?: string;
    style?: React.CSSProperties;
    fullWidth?: boolean;
}
