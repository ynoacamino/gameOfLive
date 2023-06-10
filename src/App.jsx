/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  useState, React, useEffect, useRef,
} from 'react';
import './App.css';
import { createArrays, law } from './test/util';

function App() {
  const [count, setCount] = useState(0);
  const [boxes, setBoxes] = useState(100);
  const numBoxes = useRef();
  const [tablero, setTablero] = useState(createArrays(boxes));

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((cuenta) => cuenta + 1);
      setTablero((table) => {
        const newTable = createArrays(boxes);
        table.forEach((col, x) => {
          col.forEach((cel, y) => {
            newTable[x][y] = law(table, x, y, cel);
          });
        });
        return [...newTable];
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const listenInput = () => {
    setBoxes(Number(numBoxes.current.value));
    setTablero(createArrays(Number(numBoxes.current.value)));
  };

  const changeLIve = (live, x, y) => {
    setTablero((table) => {
      const newTable = table;
      newTable[x][y] = 1;
      return [...newTable];
    });
  };

  return (
    <>
      <button type="button" onClick={() => setCount((cuenta) => cuenta + 1)}>
        {count}
      </button>
      <input
        type="number"
        ref={numBoxes}
      />
      <button type="button" onClick={listenInput}>
        Aceptar
      </button>
      <button type="button">
        {boxes}
      </button>
      <div className="tablero" style={{ gridTemplateColumns: `repeat(${boxes},1fr)` }}>
        {tablero.map((n, x) => (
          <div className="column" style={{ gridTemplateRows: `repeat(${boxes},1fr)` }}>
            {n.map((live, y) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <div
                onClick={() => changeLIve(live, x, y)}
                className={`box ${live === 1 ? 'live' : 'dead'}`}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
