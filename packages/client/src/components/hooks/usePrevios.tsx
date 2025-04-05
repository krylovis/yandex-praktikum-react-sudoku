import { useEffect, useRef } from 'react';

function usePrevious<T extends object>(value: T) {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
export default usePrevious;
