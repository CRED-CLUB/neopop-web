import React from 'react';

export interface SpinnerProps {
    color?: string;
    size?: string;
    style?: React.CSSProperties;
    id?: string;
    className?: string;
    children?: React.ReactNode;
    spinningChildren?: boolean;
    childrenId?: string;
    childrenClassName?: string;
}
