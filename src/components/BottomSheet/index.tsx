import React, { useEffect, useLayoutEffect, useState } from 'react';
import BottomSheetControlled, {
    BottomSheetControlledCustom,
} from './components/BottomSheetControlled';
import { Prop as BottomSheetProp } from './types';

interface Prop extends Omit<BottomSheetProp, 'onCloseEnd'> {
    onAfterClose?: () => void;
}

export const useBottomSheet = ({
    onAfterClose,
    open,
}: {
    open: boolean;
    onAfterClose?: () => void;
}) => {
    const [mounted, setMounted] = useState(false);

    const handleCloseEnd = () => {
        if (onAfterClose instanceof Function) {
            onAfterClose();
        }
        setMounted(false);
    };

    useLayoutEffect(() => {
        if (open) {
            setMounted(true);
        }
    }, [open]);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [open]);

    return { mounted, handleCloseEnd };
};

const BottomSheet = ({ children, onAfterClose, ...props }: Prop) => {
    const { handleCloseEnd, mounted } = useBottomSheet({ onAfterClose, open: props.open });

    if (!mounted) {
        return null;
    }

    return (
        <BottomSheetControlled onCloseEnd={handleCloseEnd} {...props}>
            {children}
        </BottomSheetControlled>
    );
};

export const BottomSheetCustom = ({ children, onAfterClose, ...props }: Prop) => {
    const { handleCloseEnd, mounted } = useBottomSheet({ onAfterClose, open: props.open });

    if (!mounted) {
        return null;
    }

    return (
        <BottomSheetControlledCustom onCloseEnd={handleCloseEnd} {...props}>
            {children}
        </BottomSheetControlledCustom>
    );
};

export default BottomSheet;
