import React, { useEffect, useState } from "react";

export interface CounterProps {
  description: string;
  defaultCount: number;
}

export function Counter({ description, defaultCount }: CounterProps) {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);
  const [bigEnough, setBigEnough] = useState(defaultCount >= 15);

  useEffect(() => {
    let id: NodeJS.Timeout;
    if (count >= 15) {
      id = setTimeout(() => setBigEnough(true), 300);
    }
    return () => {
      clearTimeout(id);
    };
  });

  return (
    <div>
      <h2>
        DESC :{description} - DC : {defaultCount}
      </h2>
      <label>
        Incrementor:
        <input
          type="number"
          value={incrementor}
          onChange={(evt) => {
            console.log("evt.target.value", evt.target.value);
            setIncrementor(parseInt(evt.target.value) || 1);
          }}
        />
      </label>
      <button
        aria-label="Decrement"
        onClick={() => setCount(count - incrementor)}
      >
        -
      </button>
      Current count: {count}
      <button
        aria-label="Increment"
        onClick={() => setTimeout(() => setCount(count + incrementor), 200)}
      >
        +
      </button>
      {!bigEnough && <div>I am too small</div>}
    </div>
  );
}
