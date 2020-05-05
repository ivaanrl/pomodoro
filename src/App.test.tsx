import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

test('renders app component correctly', () => {
  const wrapper = shallow(<App />);
  const app = wrapper.find(`[className="App"]`);
  expect(app.length).toBe(1);
});

test('renders child components', () => {
  const wrapper = shallow(<App />);
  const app = wrapper.find(`[className="App"]`);
  expect(app.children().length).toBe(1);
});
