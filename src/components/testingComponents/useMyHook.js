import { useState } from 'react';

export function useMyHook() {
  const [inc, setInc] = useState(5);

  return [inc, 2, 3];
}
