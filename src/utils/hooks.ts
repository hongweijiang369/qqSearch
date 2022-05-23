import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number) => {
  const [param, setParam] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setParam(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return param;
};
