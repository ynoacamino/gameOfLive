/* eslint-disable react-hooks/exhaustive-deps */
import {
  useState, React, useEffect, useRef,
} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [boxes, setBoxes] = useState(100);
  const numBoxes = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((cuenta) => cuenta + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const listenInput = () => {
    console.log(numBoxes.current.e.target);
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
    </>
  );
}

export default App;
