import { FontNameSpaceInterface } from '@types';

export interface HeaderProps {
    heading?: string;
    description?: string;
    color?: string;
    onBackClick: React.MouseEventHandler;
    textStyle?: {
        heading: FontNameSpaceInterface;
        description: FontNameSpaceInterface;
    };
}
