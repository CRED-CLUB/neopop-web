import React from 'react';

const useScrollIntoView = (options: any) => {
    const { scrollIntoView = false, ref } = options;
    React.useEffect(() => {
        if (scrollIntoView instanceof Object) {
            ref?.current?.scrollIntoView(scrollIntoView);
        } else {
            ref?.current?.scrollIntoView();
        }
    }, []);
};

export default useScrollIntoView;
