/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  useState, React, useRef,
} from 'react';
import './App.css';
import { createArrays } from './test/util';
import TableSTOP from './TableSTOP/TableSTOP';
import TableLive from './TableLIVE/TableLIVE';
import Options from './Options/Options';

function App() {
  // const [count, setCount] = useState(0);
  const [boxes, setBoxes] = useState(100);
  const [tablero, setTablero] = useState(createArrays(boxes));
  const [live, setLive] = useState(false);

  const setingTablero = (tab) => {
    setTablero(tab);
  };

  const stopOrLive = () => {
    setLive((l) => !l);
  };

  return (
    <>
      <Options />
      <button type="button" onClick={() => stopOrLive()} />
      {live ? (
        <TableLive
          tablero={tablero}
          boxes={boxes}
          setingTablero={setingTablero}
        />
      )
        : (
          <TableSTOP
            tablero={tablero}
            boxes={boxes}
            setingTablero={setingTablero}
          />
        )}
    </>
  );
}

export default App;
