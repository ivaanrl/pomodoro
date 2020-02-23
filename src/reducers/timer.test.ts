import { ActionTypes } from '../actions/types';
import allActions from '../actions/';
import { rootReducer } from './index';

describe('actions', () => {
  test('should create an action to set a new time', () => {
    const timer = 2000;
    const expectedAction = {
      type: ActionTypes.startTimer,
      payload: timer
    };
    expect(allActions.startTimer(timer)).toEqual(expectedAction);
  });

  test('should create an action to restart the timer', () => {
    const expectedAction = {
      type: ActionTypes.resetTimer
    };
    expect(allActions.resetTimer()).toEqual(expectedAction);
  });

  test('should create an action to pause the timer', () => {
    const expectedAction = {
      type: ActionTypes.pauseTimer
    };
    expect(allActions.pauseTimer()).toEqual(expectedAction);
  });
});

describe('timer reducer', () => {
  test('should return the initial state', () => {
    expect(rootReducer(undefined, { type: 'anything' })).toEqual({
      timer: {
        work: 1500,
        break: 300
      }
    });
  });

  test('should return the modified timer', () => {
    expect(
      rootReducer(
        { timer: { work: 2000, break: 300 } },
        { type: ActionTypes.startTimer }
      )
    ).toEqual({
      timer: { work: 2000, break: 300 }
    });
  });

  test('should reset the timer', () => {
    rootReducer(
      { timer: { work: 2000, break: 300 } },
      { type: ActionTypes.startTimer }
    );
    expect(rootReducer(undefined, { type: ActionTypes.resetTimer })).toEqual({
      timer: { work: 1500, break: 300 }
    });
  });
});
