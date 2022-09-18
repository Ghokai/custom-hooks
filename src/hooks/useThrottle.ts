import { useRef, useCallback } from "react";

export const useThrottle = (cb: (...args: any[]) => void , delay = 2000) => {
  const isWaitingRef = useRef(false);
  const paramsRef = useRef<null | any[]>(null);
  const timeoutRef = useRef<undefined | NodeJS.Timeout>(undefined)
  
  const fn = useCallback((...args: any[]) => {
    const timeoutCb = () => {
      if(paramsRef.current) {
        cb(...paramsRef.current);
        paramsRef.current = null;

        timeoutRef.current = setTimeout(timeoutCb, delay);
    } else {
        isWaitingRef.current = false;
      }
    };

    if(isWaitingRef.current) {
      paramsRef.current = args;

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(timeoutCb, delay);
      
      return;
    }

    cb(...args);
    isWaitingRef.current = true;

    timeoutRef.current = setTimeout(timeoutCb, delay);
  }, [cb, delay])

  return fn;
};