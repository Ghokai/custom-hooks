import { useRef } from "react";

export const useDebounce = (cb : (...args: any[]) => void, delay = 2000) => {
    const timeoutRef = useRef<undefined | NodeJS.Timeout>(undefined);

    const fn = (...args: any[]) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            cb(...args);
            timeoutRef.current = undefined;
        }, delay);
    };

    return fn;
};