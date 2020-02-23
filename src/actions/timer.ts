import { ActionTypes } from './types';

export const startTimer = (payload: number = 1500) => {
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
