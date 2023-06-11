import './Options.css';
import React from 'react';
import btnPause from '../img/btnPause.png';
import btnVelocity from '../img/btnVelocity.png';
import btnReset from '../img/btnReset.png';
import btnLive from '../img/btnLive.png';

function Options({
  live, stopOrLive, moreVelo, resetTable, velo,
}) {
  return (
    <div className="Options">
      <button className="optionsButtons" type="button" onClick={stopOrLive}>
        <img className="imgButtons" src={live ? btnPause : btnLive} alt="pauseAndLive" />
      </button>
      <button className="optionsButtons" type="button" onClick={resetTable} disabled={live}>
        <img className="imgButtons" src={btnReset} alt="reset" />
      </button>
      <button className={`optionsButtons ${velo && 'moreVelo'}`} type="button" onClick={moreVelo} disabled={!live}>
        <img className="imgButtons" src={btnVelocity} alt="moreVelocity" />
      </button>
    </div>
  );
}

export default Options;
