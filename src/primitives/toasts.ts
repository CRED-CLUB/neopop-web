import { colorGuide } from '@primitives';
import { ToastTypes } from '@types';

export const getToastColor = (type: ToastTypes) => {
    switch (type) {
        case 'success':
            return colorGuide.darkComponents.toast.success;
        case 'error':
            return colorGuide.darkComponents.toast.error;
        case 'warning':
            return colorGuide.darkComponents.toast.warning;
        case 'info':
            return colorGuide.darkComponents.toast.info;
        default:
            return colorGuide.darkComponents.toast.error;
    }
};
