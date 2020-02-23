import React from 'react';

const TimerControls = () => {
  return (
    <div className="timer-controls-container">
      <div className="timer-control">
        <button className="arr-btn"></button>
        <div className="work"></div>
        <button className="arr-btn"></button>
      </div>
      <div className="timer-control">
        <button className="arr-btn"></button>
        <div className="break"></div>
        <button className="arr-btn"></button>
      </div>
    </div>
  );
};

export default TimerControls;
