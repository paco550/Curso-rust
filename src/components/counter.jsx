import { useState } from 'react';
import styles from './counter.module.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h2>Contador: {count}</h2>
      <div className={styles['button-container']}>
        <button className={styles.button} onClick={() => setCount(count - 1)}>-</button>
        <button className={styles.button} onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default Counter;

