/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  useState, React, useEffect, useRef,
} from 'react';
import './App.css';

function App() {
  const createArrays = (num) => {
    const elArray = [];
    for (let i = 0; i < num; i += 1) {
      elArray.push(Array(num).fill(0));
    }
    return (elArray);
  };
  const [count, setCount] = useState(0);
  const [boxes, setBoxes] = useState(100);
  const numBoxes = useRef();
  const [tablero, setTablero] = useState(createArrays(50));

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((cuenta) => cuenta + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const listenInput = () => {
    setBoxes(numBoxes.current.value);
    console.log('hola');
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
      <div className="tablero">
        {tablero.map((n, x) => (
          <div className="column">
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
