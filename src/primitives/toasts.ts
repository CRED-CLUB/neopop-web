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
        default:
            return colorGuide.darkComponents.toast.error;
    }
};
