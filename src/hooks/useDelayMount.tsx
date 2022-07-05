import { useLayoutEffect, useRef, useState } from 'react';

const useDelayMount = (mountReference: boolean) => {
    const [mounted, setMounted] = useState(false);
    const timerRef = useRef<null | number>(null);

    useLayoutEffect(() => {
        if (mountReference) {
            timerRef.current = requestAnimationFrame(() => {
                setMounted(true);
            });
        }

        return () => {
            if (timerRef.current) {
                cancelAnimationFrame(timerRef.current);
            }
        };
    }, [mountReference]);

    return mountReference ? mounted : false;
};

export default useDelayMount;
