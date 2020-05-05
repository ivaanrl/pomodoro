import { ActionTypes } from './types';

export const startTimer = (payload: { work: number; break: number }) => {
  return {
    type: ActionTypes.startTimer,
    payload: payload
  };
};

export const pauseTimer = () => {
  return {
    type: ActionTypes.pauseTimer
  };
};

export const resetTimer = () => {
  return {
    type: ActionTypes.resetTimer
  };
};

export const increaseWorkTimer = () => {
  return {
    type: ActionTypes.increaseWorkTimer
  };
};

export const decreaseWorkTimer = () => {
  return {
    type: ActionTypes.decreaseWorkTimer
  };
};

export const increaseBreakTimer = () => {
  return {
    type: ActionTypes.increaseBreakTimer
  };
};

export const decreaseBreakTimer = () => {
  return {
    type: ActionTypes.decreaseBreakTimer
  };
};

export const hardResetTimer = () => {
  return {
    type: ActionTypes.hardResetTimer
  };
};
