import { Timer } from './Timer';
import React from 'react';
import { shallow } from 'enzyme';
import { timer } from '../../reducers/timer';
import { useDispatch } from 'react-redux';
import { rootReducer } from '../../reducers';
import { ActionTypes } from '../../actions/types';

jest.mock('react-redux');
const wrapper = shallow(<Timer />);
test('renders timer correctly', () => {
  const timer = wrapper.find('.timer');
  expect(timer.length).toBe(1);
});

test('renders buttons correctly', () => {
  const buttons = wrapper.find('.btn');
  expect(buttons.length).toBe(3);
});

//test('should call action in reducer with modified time', () => {
//  const button = wrapper.find('.start-timer');
//  button.simulate('click');
//  expect(rootReducer(undefined, { type: ActionTypes.startTimer })).toEqual(
//    1600
//  );
//});
