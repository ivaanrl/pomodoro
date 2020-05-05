import { combineReducers } from 'redux';
import { timer } from './timer';
export interface StoreState {
  timer: {
    work: number;
    break: number;
    fixWork: number;
    fixBreak: number;
  };
}

export const rootReducer = combineReducers<StoreState>({
  timer: timer
});
