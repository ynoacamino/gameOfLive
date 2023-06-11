/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  useState, React,
} from 'react';
import './App.css';
import { createArrays } from './test/util';
import TableSTOP from './TableSTOP/TableSTOP';
import TableLive from './TableLIVE/TableLIVE';
import Options from './Options/Options';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [boxes, setBoxes] = useState(Math.round(window.screen.width / 28));
  const [tablero, setTablero] = useState(createArrays(boxes));
  const [live, setLive] = useState(false);
  const [velo, setVelo] = useState(false);

  const setingTablero = (tab) => {
    setTablero([...tab]);
  };

  const stopOrLive = () => {
    setLive((l) => !l);
  };

  const resetTable = () => {
    setTablero([...createArrays(boxes)]);
  };

  const moreVelo = () => {
    setVelo((v) => !v);
  };

  return (
    <>
      <Options
        live={live}
        stopOrLive={stopOrLive}
        moreVelo={moreVelo}
        resetTable={resetTable}
        velo={velo}
      />

      {live && (
      <TableLive
        tablero={tablero}
        boxes={boxes}
        setingTablero={setingTablero}
        velo={velo}
      />
      )}

      {!live && (
      <TableSTOP
        tablero={tablero}
        boxes={boxes}
        setTablero={setTablero}
      />
      )}

    </>
  );
}

export default App;
