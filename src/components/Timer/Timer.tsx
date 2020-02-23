import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../actions';
import { StoreState } from '../../reducers';

let timerInterval: NodeJS.Timeout;
export const Timer = () => {
  const dispatch = useDispatch();
  let workTime = useSelector((state: StoreState) => state.timer.work);
  //let breakTime = useSelector((state: StoreState) => state.timer.break)
  const startTimer = (time: number) => {
    timerInterval = setInterval(reduceTime, time);
  };

  const reduceTime = () => {
    if (workTime === 0) {
      clearInterval(timerInterval);
    } else {
      workTime = workTime - 1;
      dispatch(allActions.startTimer(workTime));
    }
  };
  const resetTimer = () => {
    dispatch(allActions.resetTimer());
    clearInterval(timerInterval);
  };

  const stopTimer = () => {
    clearInterval(timerInterval);
  };

  const formatTime = (time: number) => {
    let mins = ('0' + Math.floor(time / 60)).slice(-2); //format to two digits.
    let secs = ('0' + (time % 60)).slice(-2);
    return `${mins}:${secs}`;
  };

  return (
    <div className="timer-container">
      <div className="timer">{formatTime(workTime)}</div>
      <div className="button-container">
        <button
          className="btn start-timer"
          onClick={() => startTimer(workTime)}
        >
          START
        </button>
        <button className="btn" onClick={stopTimer}>
          STOP
        </button>
        <button className="btn" onClick={resetTimer}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Timer;
