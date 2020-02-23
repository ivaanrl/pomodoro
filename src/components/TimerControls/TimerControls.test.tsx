import React from 'react';
import { shallow } from 'enzyme';
import TimerControls from './TimerControls';

jest.mock('react-redux');
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
