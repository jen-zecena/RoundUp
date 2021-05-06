import UploadEvent from './components/UploadEvent';
import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe("UploadEvent", () => {
    it("renders correctly", () => {
      const wrapper = shallow(<UploadEvent />);
      expect(wrapper.exists()).toBe(true);
    });

    it("updates name correctly", () => {
        const wrapper = mount(<UploadEvent/>);
        const input = wrapper.find('input[name="name"]');
        input.instance().value = 'pei pei';
        input.simulate('change');
        expect(wrapper.state().name).toEqual('pei pei');      
    });

});
