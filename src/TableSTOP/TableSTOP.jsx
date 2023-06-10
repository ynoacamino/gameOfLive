/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './TableSTOP.css';

function Table({ tablero, boxes, setingTablero }) {
  const [tab, setTab] = useState(tablero);

  useEffect(() => () => setingTablero(tab), []);

  const changeLIve = (live, x, y) => {
    setTab((table) => {
      const newTable = table;
      newTable[x][y] = live === 1 ? 0 : 1;
      return [...newTable];
    });
  };

  return (
    <div className="tablero" style={{ gridTemplateColumns: `repeat(${boxes},1fr)` }}>
      {tab.map((n, x) => (
        <div className="column" style={{ gridTemplateRows: `repeat(${boxes},1fr)` }}>
          {n.map((live, y) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              aria-hidden
              role="button"
              onClick={() => changeLIve(live, x, y)}
              className={`box ${live === 1 ? 'live' : 'dead'}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Table;
