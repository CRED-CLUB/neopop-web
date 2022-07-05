import { FontNameSpaceInterface } from '@types';

export interface BackProps {
    heading?: string;
    color?: string;
    onClick: React.MouseEventHandler;
    rightElement?: React.ReactNode;
    textStyle?: FontNameSpaceInterface;
}
