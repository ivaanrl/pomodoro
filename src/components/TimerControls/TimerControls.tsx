import React from 'react';
import './TimerControls.scss';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../actions';
import { StoreState } from '../../reducers';

const TimerControls = () => {
  const dispatch = useDispatch();
  let fixWorkTime = useSelector((state: StoreState) => state.timer.fixWork);
  let fixBreakTime = useSelector((state: StoreState) => state.timer.fixBreak);

  return (
    <div className="timer-controls-container">
      <div className="little-container">
        <div className="timer-control">
          <button
            className="arr-btn increase-work-timer"
            onClick={() => dispatch(allActions.increaseWorkTimer())}
          >
            +
          </button>
          <div className="work time-control-text">
            {Math.floor(fixWorkTime / 60)}
          </div>
          <button
            className="arr-btn decrease-work-timer"
            onClick={() => dispatch(allActions.decreaseWorkTimer())}
          >
            -
          </button>
        </div>
        <div className="description">SESSION LENGTH</div>
      </div>
      <div className="little-container">
        <div className="timer-control">
          <button
            className="arr-btn increase-break-timer"
            onClick={() => dispatch(allActions.increaseBreakTimer())}
          >
            +
          </button>
          <div className="break time-control-text">
            {Math.floor(fixBreakTime / 60)}
          </div>
          <button
            className="arr-btn decrease-break-timer"
            onClick={() => dispatch(allActions.decreaseBreakTimer())}
          >
            -
          </button>
        </div>
        <div className="description">BREAK LENGTH</div>
      </div>
    </div>
  );
};

export default TimerControls;
