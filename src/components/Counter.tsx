import React, { useState } from 'react';
import './Counter.css';

// Counter component demonstrating useState hook
const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-demo">
      <h3>Counter Demo</h3>
      <p>Current count: <span className="counter-value">{count}</span></p>
      <div className="counter-buttons">
        <button 
          className="btn-secondary" 
          onClick={increment}
          type="button"
        >
          Increment
        </button>
        <button 
          className="btn-secondary" 
          onClick={decrement}
          type="button"
        >
          Decrement
        </button>
        <button 
          className="btn-secondary" 
          onClick={reset}
          type="button"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;