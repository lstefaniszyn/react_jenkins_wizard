import React from 'react';
import { useState } from 'react';
import { useMyHook } from './useMyHook';

function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const [value1, value2, value3] = useMyHook();

  return [count, () => setCount(count + 1)];
}

function Example() {
  const [count, setCount] = useState(0);
  const [value1, value2, value3] = useMyHook();

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export { useCounter, Example };
