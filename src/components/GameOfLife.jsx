import { useEffect, useRef, useState } from 'react';

const resolution = 20;
const rows = 25;
const cols = 25;

function createBoard() {
  return Array.from({ length: rows }, () => Array(cols).fill(0));
}

const initialBoard = createBoard();

const GameOfLife = () => {
  const [board, setBoard] = useState(initialBoard);
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(500);
  const intervalRef = useRef(null);

  const countNeighbors = (board, x, y) => {
    let neighbors = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (i === 0 && j === 0) continue;
        const row = (x + i + rows) % rows;
        const col = (y + j + cols) % cols;
        neighbors += board[row][col];
      }
    }
    return neighbors;
  };

  const nextGeneration = () => {
    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((row, x) => row.map((cell, y) => {
        const neighbors = countNeighbors(prevBoard, x, y);
        if (cell === 1 && (neighbors < 2 || neighbors > 3)) return 0;
        if (cell === 0 && neighbors === 3) return 1;
        return cell;
      }));
      return newBoard;
    });
  };

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(nextGeneration, speed);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running, speed]);

  const toggleCell = (x, y) => {
    setBoard(prevBoard => {
      const newBoard = prevBoard.map((row, rowIndex) =>
        row.map((cell, colIndex) =>
          rowIndex === x && colIndex === y ? (cell ? 0 : 1) : cell
        )
      );
      return newBoard;
    });
  };

  return (
    <div>
      <h1>Juego de la Vida</h1>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, ${resolution}px)` }}>
        {board.map((row, x) =>
          row.map((cell, y) => (
            <div
              key={`${x}-${y}`}
              onClick={() => toggleCell(x, y)}
              style={{
                width: resolution,
                height: resolution,
                backgroundColor: cell ? 'black' : 'white',
                border: '1px solid #ddd'
              }}
            />
          ))
        )}
      </div>
      <div>
        <button onClick={() => setRunning(!running)}>
          {running ? 'Pausar' : 'Iniciar'}
        </button>
        <label>
          Velocidad:
          <input
            type="range"
            min="100"
            max="1000"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
};

export default GameOfLife;