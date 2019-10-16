import { useState } from 'react';

function useMyHook() {
  const [inc, setInc] = useState(5);

  return [inc, 5, 7];
}

export { useMyHook };
