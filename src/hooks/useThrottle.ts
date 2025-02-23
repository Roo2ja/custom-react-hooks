import { useState, useEffect } from "react";

export function useThrottle<T>(value: T, limit = 1000): T {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const lastRan = Date.now();
    const handler = setTimeout(() => {
      if (Date.now() - lastRan >= limit) {
        setThrottledValue(value);
      }
    }, limit - (Date.now() - lastRan));

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
}
