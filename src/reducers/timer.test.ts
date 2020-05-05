import { ActionTypes } from '../actions/types';
import allActions from '../actions/';
import { rootReducer } from './index';

describe('actions', () => {
  test('should create an action to set a new time', () => {
    const expectedAction = {
      type: ActionTypes.startTimer,
      payload: { work: 2000, break: 300 }
    };
    expect(allActions.startTimer({ work: 2000, break: 300 })).toEqual(
      expectedAction
    );
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
        break: 300,
        fixBreak: 300,
        fixWork: 1500
      }
    });
  });

  test('should return the modified timer', () => {
    expect(
      rootReducer(
        { timer: { work: 2000, break: 300, fixWork: 2000, fixBreak: 300 } },
        { type: ActionTypes.startTimer }
      )
    ).toEqual({
      timer: { work: 2000, break: 300, fixWork: 2000, fixBreak: 300 }
    });
  });

  test('should reset the timer', () => {
    expect(rootReducer(undefined, { type: ActionTypes.resetTimer })).toEqual({
      timer: { work: 1500, break: 300, fixWork: 1500, fixBreak: 300 }
    });
  });

  test('work timer should increase by one minute', () => {
    const initialWorkTime = 1500;
    expect(
      rootReducer(undefined, { type: ActionTypes.increaseWorkTimer })
    ).toEqual({
      timer: {
        work: initialWorkTime + 60,
        break: 300,
        fixWork: initialWorkTime + 60,
        fixBreak: 300
      }
    });
  });

  test('work timer should decrease by one minute', () => {
    const initialWorkTime = 1500;
    expect(
      rootReducer(undefined, { type: ActionTypes.decreaseWorkTimer })
    ).toEqual({
      timer: {
        work: initialWorkTime - 60,
        break: 300,
        fixWork: initialWorkTime - 60,
        fixBreak: 300
      }
    });
  });

  test('break timer should decrese by one minute', () => {
    const initialBreakTime = 300;
    expect(
      rootReducer(undefined, { type: ActionTypes.decreaseBreakTimer })
    ).toEqual({
      timer: {
        work: 1500,
        break: initialBreakTime - 60,
        fixWork: 1500,
        fixBreak: initialBreakTime - 60
      }
    });
  });

  test('break timer should increase by one minute', () => {
    const initialBreakTime = 300;
    expect(
      rootReducer(undefined, { type: ActionTypes.increaseBreakTimer })
    ).toEqual({
      timer: {
        work: 1500,
        break: initialBreakTime + 60,
        fixWork: 1500,
        fixBreak: initialBreakTime + 60
      }
    });
  });

  test('work timer should not go below 0', () => {
    expect(
      rootReducer(
        { timer: { work: 60, break: 300, fixBreak: 300, fixWork: 60 } },
        { type: ActionTypes.decreaseWorkTimer }
      )
    ).toEqual({
      timer: { work: 60, break: 300, fixWork: 60, fixBreak: 300 }
    });
  });

  test('break timer should not go below 0', () => {
    expect(
      rootReducer(
        { timer: { work: 1500, break: 60, fixWork: 1500, fixBreak: 60 } },
        { type: ActionTypes.decreaseBreakTimer }
      )
    ).toEqual({
      timer: { work: 1500, break: 60, fixWork: 1500, fixBreak: 60 }
    });
  });

  test('work timer should not go above 3600', () => {
    expect(
      rootReducer(
        { timer: { work: 3600, break: 300, fixWork: 3600, fixBreak: 300 } },
        { type: ActionTypes.increaseWorkTimer }
      )
    ).toEqual({
      timer: { work: 3600, break: 300, fixWork: 3600, fixBreak: 300 }
    });
  });

  test('break timer should not go above 1800', () => {
    expect(
      rootReducer(
        { timer: { work: 1500, break: 1800, fixWork: 1500, fixBreak: 1800 } },
        { type: ActionTypes.increaseBreakTimer }
      )
    ).toEqual({
      timer: { work: 1500, break: 1800, fixWork: 1500, fixBreak: 1800 }
    });
  });
});
