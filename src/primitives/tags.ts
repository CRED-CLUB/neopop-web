import { TagColorMode, TagTypes } from '@components/Tags/types';
import { colorGuide } from '@primitives';

export const getTagColor = (type: TagTypes, mode: TagColorMode) => {
    const colorConfig = colorGuide[mode == 'light' ? 'lightComponents' : 'darkComponents'].tags;
    switch (type) {
        case 'success':
            return colorConfig.success;
        case 'error':
            return colorConfig.error;
        case 'warning':
            return colorConfig.warning;
        default:
            return colorConfig.error;
    }
};
