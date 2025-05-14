import { useEffect, useState } from 'react';

/**
 * A hook that returns whether the component is mounted.
 * Useful for preventing state updates on unmounted components.
 */
export function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return isMounted;
}