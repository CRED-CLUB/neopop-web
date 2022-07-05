const useAutoFocus = (options: any) => {
    const { autoFocus = false, ref, currentValue = '' } = options;

    if (autoFocus && !currentValue) {
        setTimeout(() => {
            ref?.current?.focus();
        }, 20);
    }
};

export default useAutoFocus;
