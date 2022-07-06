import { useLayoutEffect, useRef, useState, MutableRefObject } from 'react';

function useClientHeight<A extends HTMLElement>(): [{ ref: MutableRefObject<A> }, number] {
    const ref = useRef<A>() as MutableRefObject<A>;
    const [clientHeight, setClientHeight] = useState(0);

    useLayoutEffect(() => {
        setClientHeight(ref.current?.clientHeight ?? 0);

        function handleResize() {
            setClientHeight(ref.current?.clientHeight ?? 0);
        }

        window.addEventListener('resize', handleResize);
        ref.current?.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            ref.current?.removeEventListener('resize', handleResize);
        };
    }, []);

    return [{ ref }, clientHeight];
}

export default useClientHeight;
