import React, { Component } from 'react';
import RSVPForm from './components/RSVPForm';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

const wrapper = shallow(<RSVPForm/>);


describe("Tag input", () => {
  it("Should capture title correctly onChange", () => {
      const title = wrapper.find("input").at(0);
      title.instance().value = "Test";
      title.simulate("change");
      console.log(store.getState().form);
     // expect(store.getState().form..toHaveBeenCalledWith("Test");
  });
});

test('dummyTest', () => {
  expect(true).toBeTruthy();
})