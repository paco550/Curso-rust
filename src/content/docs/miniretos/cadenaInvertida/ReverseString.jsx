import { useState } from 'react';

function ReverseString() {
    const [input, setInput] = useState('');
    const [reversed, setReversed] = useState('');
  
    // Función para invertir la cadena
    const reverseString = (str) => {
      return str.split('').reverse().join('');
    };
  
    // Manejar el evento de clic en el botón
    const handleReverse = () => {
      setReversed(reverseString(input));
    };
  
    return (
      <div>
        <h2>Invertir Cadena</h2>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Ingresa una cadena"
        />
        <button onClick={handleReverse}>Invertir</button>
        {reversed && <p>Cadena Invertida: {reversed}</p>}
      </div>
    );
  }
  
  export default ReverseString;
  