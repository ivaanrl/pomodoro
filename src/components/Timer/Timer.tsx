import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../actions';
import { StoreState } from '../../reducers';
import TimerControls from '../TimerControls/TimerControls';
import './Timer.scss';

let timerInterval: NodeJS.Timeout;
export const Timer = () => {
  const dispatch = useDispatch();
  const [startButtonDisabled, setStartButtonDisabled] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  let workTime = useSelector((state: StoreState) => state.timer.work);
  let breakTime = useSelector((state: StoreState) => state.timer.break);
  let fixWorkTime = useSelector((state: StoreState) => state.timer.fixWork);
  let fixBreakTime = useSelector((state: StoreState) => state.timer.fixBreak);

  const startTimer = () => {
    setStartButtonDisabled(true);
    timerInterval = setInterval(reduceTime, 1000);
  };

  const reduceTime = async () => {
    if (workTime > 0) {
      workTime = workTime - 1;
      if (workTime === 0) {
        clearInterval(timerInterval);
        audioRef.current?.play();
        audioRef.current?.play();
        startTimer();
      }
    } else {
      breakTime -= 1;
    }
    dispatch(allActions.startTimer({ work: workTime, break: breakTime }));

    if (breakTime === 0) {
      clearInterval(timerInterval);
      audioRef.current?.play();
      audioRef.current?.play();
      dispatch(allActions.resetTimer());

      workTime = fixWorkTime;
      breakTime = fixBreakTime;
      startTimer();
    }
  };
  const resetTimer = () => {
    clearInterval(timerInterval);
    dispatch(allActions.hardResetTimer());
    setStartButtonDisabled(false);
  };

  const stopTimer = () => {
    clearInterval(timerInterval);
    setStartButtonDisabled(false);
  };

  const formatTime = (time: number) => {
    let mins = ('0' + Math.floor(time / 60)).slice(-2); //format to two digits.
    let secs = ('0' + (time % 60)).slice(-2);
    return `${mins}:${secs}`;
  };

  let timer = (
    <div className="timer">
      <div className="work-text">LET'S GET TO WORK!</div>
      <div className="work-timer">{formatTime(workTime)}</div>
    </div>
  );

  if (workTime === 0) {
    timer = (
      <div className="timer">
        <div className="work-text">TIME TO GET A BREAK</div>
        <div className="work-timer">{formatTime(breakTime)}</div>
      </div>
    );
  }

  return (
    <div className="timer-container">
      {timer}
      <div className="button-container">
        <button
          className="btn start-timer"
          disabled={startButtonDisabled}
          onClick={() => startTimer()}
        >
          START
        </button>
        <button className="btn" onClick={stopTimer}>
          STOP
        </button>
        <button className="btn res-timer" onClick={resetTimer}>
          RESET
        </button>
      </div>
      <TimerControls />
      <audio ref={audioRef}>
        <source
          src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
          type="audio/mpeg"
        ></source>
      </audio>
    </div>
  );
};

export default Timer;
