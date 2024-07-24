---
title: El juego de la vida (javaScript)
description: Guia basica para crear el juego de la vida de John Horton Conway
---

# Curso: Implementación del "Juego de la Vida" con Astro

## Introducción

**Objetivo:**
Crear una experiencia inmersiva y educativa sobre el "Juego de la Vida".

"Descubre la evolución de patrones fascinantes en el 'Juego de la Vida', un autómata celular que simula la vida y demuestra conceptos complejos a través de reglas simples."

Este juego tiene aplicaciones en biología, computación y física, demostrando cómo patrones simples pueden dar lugar a comportamientos complejos y autoorganización.

## Conceptos Clave y Reglas del Juego

**Visuales:**
Añadir diagramas y animaciones para explicar las reglas. Por ejemplo, puedes usar herramientas como [draw.io](https://app.diagrams.net/) para crear diagramas.

**Ejemplos:**
Incluir ejemplos concretos, como el "glider" (planeador), un patrón que se mueve diagonalmente a través del tablero.

**Preguntas Frecuentes:**

- **¿Qué pasa si todas las células mueren?**
  Las células permanecerán muertas hasta que se restablezca manualmente el estado inicial.
- **¿Hay patrones que se repiten indefinidamente?**
  Sí, patrones como los osciladores y las naves espaciales pueden repetirse indefinidamente.

## Configuración del Proyecto

**Simplificar la instalación:**
Proporciona instrucciones paso a paso:

```bash
npm create astro@latest
cd my-astro-project
npm install
```

**Alternativas:**
Si prefieres otras tecnologías, puedes usar frameworks como React o Vue.

**Capturas de pantalla:**
Añadir capturas de pantalla del proceso de instalación para mayor claridad.

## Implementación Paso a Paso

**Desglosar en secciones:**

### Inicialización del Proyecto

Crea el proyecto Astro:

```bash
npm create astro@latest
```

### Creación del Componente de Juego

Crea `GameOfLife.astro` en `src/components`:

```astro
---
import { useState, useEffect, useRef } from 'react';

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
---
<GameOfLife />
```

### Usar el Componente en la Página Principal

```astro
---
import GameOfLife from '../components/GameOfLife.astro';
---

<html>
  <head>
    <title>Juego de la Vida</title>
  </head>
  <body>
    <GameOfLife />
  </body>
</html>
```

**Pseudocódigo:**

```plaintext
CrearTablero() -> Inicializar matriz de celdas
ContarVecinos(x, y) -> Contar celdas vivas alrededor de (x, y)
SiguienteGeneracion() -> Actualizar estado de cada celda
```

**Comentarios en el código:**
Añade comentarios explicativos en cada parte del código.

## Ejecución y Pruebas

**Guía interactiva:**
Permite al usuario experimentar con el juego en tiempo real y observar su comportamiento.

**Casos de prueba:**
Muestra ejemplos de patrones como el "glider" y cómo se comportan en el juego.

**Captura de errores:**
Explica cómo depurar y solucionar errores comunes.

## Conclusión

**Énfasis en el aprendizaje:**
Resalta los conocimientos adquiridos sobre autómatas celulares y simulaciones.

**Posibilidades de mejora:**
Sugerir nuevas características, como diferentes reglas o patrones iniciales.

**Compartir la experiencia:**
Invita a los lectores a compartir sus propias implementaciones y descubrimientos.

## Referencias

**Ampliar la lista:**

- "El Juego de la Vida y Cómo Jugarlo" de John Conway
- Artículos sobre autómatas celulares

**Clasificar las referencias:**

- Introducciones
- Implementaciones
- Aplicaciones avanzadas

**Anotaciones personales:**
Destaca los aspectos más relevantes de cada recurso.

## Recursos Adicionales

**Tutoriales:**
Explora tutoriales en línea sobre la creación de juegos con Astro y React.

**Comunidades:**
Únete a comunidades de desarrollo web para obtener ayuda y compartir conocimientos.

**Herramientas de documentación:**
Utiliza herramientas como MkDocs o Docusaurus para crear contenido atractivo y organizado.

## Recuerda

**Claridad y concisión:**
Usa un lenguaje claro y conciso.

**Público objetivo:**
Adapta el contenido al nivel de conocimiento del público objetivo.

**Actualización:**
Mantén la documentación actualizada con las últimas versiones del juego y las tecnologías utilizadas.

Implementando estas mejoras, la documentación del "Juego de la Vida" se convertirá en una herramienta valiosa para aprender, comprender y disfrutar de este fascinante juego.

##
