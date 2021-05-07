import React, { Component } from 'react';
import {UserSearch} from './components/UserSearch';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
const wrapper = shallow(<UserSearch form="test"/>);

test('dummyTest', () => {
  expect(true).toBeTruthy();
})