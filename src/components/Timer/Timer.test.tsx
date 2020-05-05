import Timer, { Timer as TimerConnected } from './Timer';
import React from 'react';
import { shallow } from 'enzyme';
import { ActionTypes } from '../../actions/types';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));
const wrapperConnected = shallow(<Timer />);
const wrapper = shallow(<TimerConnected />);

test('renders timer correctly', () => {
  const timer = wrapper.find('.timer');
  expect(timer.length).toBe(1);
});

test('renders buttons correctly', () => {
  const buttons = wrapper.find('.btn');
  expect(buttons.length).toBe(3);
});

test('renders time container correctly', () => {
  const timerContainer = wrapper.find('.timer-container');
  expect(timerContainer.length).toBe(1);
});

test('Timer is reseted when reset button is clicked', () => {
  const button = wrapperConnected.find('.start-timer');
  button.simulate('click');
  wrapper.update();

  const resButton = wrapperConnected.find('.res-timer');
  resButton.simulate('click');
  wrapper.update();

  expect(mockDispatch).toHaveBeenCalledWith({
    type: ActionTypes.hardResetTimer
  });
});
