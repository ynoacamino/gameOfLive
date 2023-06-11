import React from 'react';
import './TableSTOP.css';

function Table({ tablero, boxes, setTablero }) {
  const changeLIve = (live, x, y) => {
    setTablero((table) => {
      const newTable = table;
      newTable[x][y] = live === 1 ? 0 : 1;
      return [...newTable];
    });
  };

  const onMoveClick = ({ buttons }, x, y) => {
    if (buttons === 1 && x !== undefined) {
      changeLIve(0, x, y);
    }
  };

  return (
    <div className="tablero" style={{ gridTemplateColumns: `repeat(${boxes},1fr)` }}>
      {tablero.map((n, x) => (
        <div className="column" style={{ gridTemplateRows: `repeat(${boxes},1fr)` }}>
          {n.map((live, y) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              aria-hidden
              role="button"
              onClick={() => changeLIve(live, x, y)}
              onMouseEnter={(e) => onMoveClick(e, x, y)}
              className={`box ${live === 1 ? 'live' : 'dead'}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Table;
