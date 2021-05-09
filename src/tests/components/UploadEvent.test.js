import React, { Component } from 'react';
import UploadEvents from '../../components/UploadEvent';
import { mount, shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Provider} from 'react-redux';
import store from './store';

configure({ adapter: new Adapter() });

const wrapper = shallow(<UploadEvents/>);  

const wrapperDeep = mount(<Provider store={store}>
  <UploadEvents/>
  </Provider>);  

expect(store.getActions().length).toBe(0);

it('+++ render the component', () => {
 expect(wrapper.length).toEqual(1)
});

it('check that search was called', () => {
  //const testTag = wrapper.find('mulitselect');
  
  expect(wrapperDeep.find('menu').props().placeholder).toEqual('tags')

  it("fills the input with a default value", () => {
    expect(wrapperDeep.find("input").prop("name")).toBe("testField");
    expect(wrapperDeep.find("input").prop("value")).toBe("Test Value");
  });
  // testTag.simulate('change', { target: {name: 'American Studies'} });

  // const submitButton = wrapper.find('button');
  // submitButton.simulate('click');
  // expect(defaultProps.onSubmit).toHaveBeenCalled();
});

it('+++ contains output', () => {
  //console.log(wrapper.find('input[placeholder="Tags"]'));
  //wrapper.find('input[placeholder="Tags"]').simulate("change", { tag: { value: 2 } });
 //expect(wrapper.find('input[placeholder="Tags"]').prop('value')).toEqual(output)
});


