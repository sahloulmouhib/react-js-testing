import React, { useState } from "react";

export interface CounterProps {
  description: string;
  defaultCount: number;
}

export function Counter({ description, defaultCount }: CounterProps) {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);

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
          onChange={(e) => setIncrementor(parseInt(e.target.value))}
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
        onClick={() => setCount(count + incrementor)}
      >
        +
      </button>
    </div>
  );
}
