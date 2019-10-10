import { useState } from 'react';
import { useMyHook } from './useMyHook';

function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const [value1, value2, value3] = useMyHook();

  //


  return [count, () => setCount(count + 1)];
}

function Example() {
  4:    const [count, setCount] = useState(0);
  5:
  6:    return (
  7:      <div>
  8:        <p>You clicked {count} times</p>
  9:        <button onClick={() => setCount(count + 1)}>
 10:         Click me
 11:        </button>
 12:      </div>
 13:    );



export { useCounter };
