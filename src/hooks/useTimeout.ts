import { useRef } from 'react';

export const useTimeout = (cb: (...args: any[]) => void, delay = 3000) => {
    const timeoutRef = useRef<undefined | NodeJS.Timeout>(undefined);

    const cbWithTimeout = (...args: any[]) => {
        timeoutRef.current = setTimeout(() => {
            cb(...args);
        }, delay);
    };

    const cancelTimeout = () => {
        clearTimeout(timeoutRef.current);
    }

    return { cbWithTimeout, cancelTimeout };
}
