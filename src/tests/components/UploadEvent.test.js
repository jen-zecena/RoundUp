import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import {UploadEvent} from '../../components/UploadEvent'

it("Updates the state", () => {
  const wrapper = shallow(<UploadEvent/>);
  const input = wrapper.find("input");
  input.simulate("change", { target: { value: 2 } });  // 'value' instead of 'num'
  //expect(wrapper.state().num).toEqual(2);  // SUCCESS
});
