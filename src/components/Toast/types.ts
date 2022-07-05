import { FontNameSpaceInterface } from '@types';

export type ToastItemProps = {
    fullWidth: boolean;
    background: string;
    autoCloseTime: number | undefined;
};

export type ToastIconProps = {
    icon: string | undefined;
};

export type OptionProps = Omit<ToastProps, 'id' | 'removeToast' | 'colorConfig'>;

export type RefType = {
    addToast: (options?: OptionProps) => void;
};

type ToastColorConfig = {
    background: string;
    color: string;
};

export type ToastTypes = 'success' | 'error' | 'warning';
export interface ToastProps {
    id?: string;
    content: string;
    description?: string;
    textStyle?: {
        heading: FontNameSpaceInterface;
        description: FontNameSpaceInterface;
    };
    type?: ToastTypes;
    colorConfig: ToastColorConfig;
    fullWidth?: boolean;
    dismissOnClick?: boolean;
    autoCloseTime?: number;
    icon?: string;
    removeToast?: (id: string) => void;
}
