import { useEffect, useState } from 'react';

/* eslint-disable react-hooks/set-state-in-effect */

export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

/* eslint-enable react-hooks/set-state-in-effect */
