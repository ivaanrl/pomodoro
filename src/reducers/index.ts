import { combineReducers } from 'redux';
import { timer } from './timer';
export interface StoreState {
  timer: {
    work: number;
    break: number;
  };
}

export const rootReducer = combineReducers<StoreState>({
  timer: timer
});
