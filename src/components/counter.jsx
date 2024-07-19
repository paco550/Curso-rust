
// Importa la librería useState de React
import { useState } from 'react';

function Counter() {
  // Declara una variable de estado llamada "count" y una función para actualizarla llamada "setCount"
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Muestra el valor actual del contador */}
      <h2>Contador: {count}</h2>
      {/* Botón para incrementar el contador */}
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      {/* Botón para decrementar el contador */}
      <button onClick={() => setCount(count -1)}>Decrementar</button>
    </div>
  );
}

export default Counter;