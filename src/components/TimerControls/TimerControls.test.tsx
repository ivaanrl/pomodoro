import React from 'react';
import { shallow } from 'enzyme';
import TimerControls from './TimerControls';
import { ActionTypes } from '../../actions/types';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

const wrapper = shallow(<TimerControls />);
test('renders timer control container correctly', () => {
  const timerControls = wrapper.find('.timer-control');
  expect(timerControls.length).toBe(2);
});

test('renders arrow buttons correctly', () => {
  const arrButtons = wrapper.find('.arr-btn');
  expect(arrButtons.length).toBe(4);
});

test('renders break length display correctly', () => {
  const breakDisplay = wrapper.find('.break');
  expect(breakDisplay.length).toBe(1);
});

test('renders work length display correctly', () => {
  const workDisplay = wrapper.find('.work');
  expect(workDisplay.length).toBe(1);
});

test('Work time increase by 1 minute when increase work time length button is clicked', () => {
  const button = wrapper.find('.increase-work-timer');
  button.simulate('click');

  expect(mockDispatch).toHaveBeenCalledWith({
    type: ActionTypes.increaseWorkTimer
  });
});

test('Work time decrease by 1 minute when decrease work time length button is clicked', () => {
  const button = wrapper.find('.decrease-work-timer');
  button.simulate('click');
  wrapper.update();

  expect(mockDispatch).toHaveBeenCalledWith({
    type: ActionTypes.decreaseWorkTimer
  });
});

test('break time increase by 1 minute when increase break time length button is clicked', () => {
  const button = wrapper.find('.increase-break-timer');
  button.simulate('click');

  expect(mockDispatch).toHaveBeenCalledWith({
    type: ActionTypes.increaseBreakTimer
  });
});

test('break time decrease by 1 minute when decrease break time length button is clicked', () => {
  const button = wrapper.find('.decrease-break-timer');
  button.simulate('click');
  wrapper.update();

  expect(mockDispatch).toHaveBeenCalledWith({
    type: ActionTypes.decreaseBreakTimer
  });
});
