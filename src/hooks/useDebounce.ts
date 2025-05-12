import { useCallback, useEffect, useRef } from "react";

export function useDebounce<T>(
  effect: (...args: Array<T>) => unknown,
  delay: number = 500,
) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debounce = useCallback(
    (...args: Array<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => effect(...args), delay);
    },
    [effect, delay],
  );

  return debounce;
}
