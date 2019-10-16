import { useMyHook } from './useMyHook';
import React, { useState, useEffect } from 'react';

function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const [value1, value2, value3] = useMyHook();

  //

  return [count, () => setCount(count + 1)];
}

const Example = props => {
  // const [count, setCount] = useState(0);
  const [value1, value2, value3] = useMyHook();

  return (
    <div>
      {/* <p>You clicked {count} times</p> */}
      <p>Your value1={value1}</p>
      <p>Your value2={value2}</p>
      <p>Your value3={value3}</p>
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
    </div>
  );
};

export { useCounter, Example };
