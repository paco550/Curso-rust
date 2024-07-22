import { useState } from 'react';
import './counter.module.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2>Contador: {count}</h2>
      <div className="button-container">
        <button className="button" onClick={() => setCount(count - 1)}>-</button>
        <button className="button" onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default Counter;

