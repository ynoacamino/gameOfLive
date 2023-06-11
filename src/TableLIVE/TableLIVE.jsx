/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from 'react';
import { law, createArrays } from '../test/util';

function Table({
  tablero, boxes, setingTablero, velo,
}) {
  const [tab, setTab] = useState(tablero);

  useEffect(() => {
    const interval = setInterval(() => {
      // setCount((cuenta) => cuenta + 1);
      setTab((table) => {
        const newTable = createArrays(boxes);
        table.forEach((col, x) => {
          col.forEach((cel, y) => {
            newTable[x][y] = law(table, x, y, cel);
          });
        });
        return [...newTable];
      });
    }, velo ? 150 : 500);
    return () => {
      clearInterval(interval);
    };
  }, [velo]);

  useEffect(() => {
    setingTablero(tab);
  }, [tab]);

  return (
    <div className="tablero" style={{ gridTemplateColumns: `repeat(${boxes},1fr)` }}>
      {tab.map((n) => (
        <div className="column" style={{ gridTemplateRows: `repeat(${boxes},1fr)` }}>
          {n.map((live) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              className={`box ${live === 1 ? 'live' : 'dead'}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Table;
