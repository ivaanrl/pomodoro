/* eslint-disable no-octal */
import { ActionTypes } from '../actions/types';

export const timer = (
  state: { work: number; break: number } = { work: 1500, break: 300 },
  action: { type: ActionTypes; payload: number }
) => {
  switch (action.type) {
    case ActionTypes.startTimer:
      return { ...state };
    case ActionTypes.resetTimer:
      return { work: 1500, ...state };
    default:
      return state;
  }
};
