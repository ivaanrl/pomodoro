/* eslint-disable no-octal */
import { ActionTypes } from '../actions/types';

export const timer = (
  state: { work: number; break: number; fixWork: number; fixBreak: number } = {
    work: 1500,
    break: 300,
    fixWork: 1500,
    fixBreak: 300
  },
  action: { type: ActionTypes; payload: { work: number; break: number } }
) => {
  switch (action.type) {
    case ActionTypes.startTimer:
      return { ...state, ...action.payload };
    case ActionTypes.resetTimer:
      return { ...state, work: state.fixWork, break: state.fixBreak };
    case ActionTypes.hardResetTimer:
      return { work: 1500, break: 300, fixWork: 1500, fixBreak: 300 };
    case ActionTypes.increaseWorkTimer:
      if (state.work < 3600) {
        return { ...state, work: state.work + 60, fixWork: state.fixWork + 60 };
      } else {
        return state;
      }
    case ActionTypes.decreaseWorkTimer:
      if (state.work >= 120) {
        return { ...state, work: state.work - 60, fixWork: state.fixWork - 60 };
      } else {
        return state;
      }
    case ActionTypes.increaseBreakTimer:
      if (state.break < 1800) {
        return {
          ...state,
          break: state.break + 60,
          fixBreak: state.fixBreak + 60
        };
      } else {
        return state;
      }
    case ActionTypes.decreaseBreakTimer:
      if (state.break >= 120) {
        return {
          ...state,
          break: state.break - 60,
          fixBreak: state.fixBreak - 60
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
