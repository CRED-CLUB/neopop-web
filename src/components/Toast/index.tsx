import React, { useEffect, useRef } from 'react';
import { ToastPortal } from './components/ToastPortal';
import { OptionProps, RefType } from './types';

class GlobalStore {
    func: Array<Function>;

    constructor() {
        this.func = [];
    }

    on(listener: Function) {
        this.func.push(listener);
    }

    off(listener: Function) {
        this.func = this.func.filter((fn) => fn !== listener);
    }

    emit(options: OptionProps) {
        this.func.forEach((l) => l(options));
    }
}

const globalStore = new GlobalStore();

export const showToast = (content: string, options?: OptionProps) => {
    globalStore.emit({ ...options, content });
};

export const ToastContainer = () => {
    const toastRef = useRef<RefType>();

    useEffect(() => {
        const listener = (options?: OptionProps) => {
            toastRef.current?.addToast(options);
        };
        globalStore.on(listener);
        return () => globalStore.off(listener);
    }, []);

    return <ToastPortal ref={toastRef} />;
};
