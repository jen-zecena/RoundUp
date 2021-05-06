import React from "react";
import { shallow , mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UploadEvent from './components/EventPageUploadEvent';

configure({ adapter: new Adapter() });
/** =>
 * Render test
 */
describe("Upload Event", () => {
    test("renders", () => {
        const wrapper = shallow(<UploadEvent/>);
        expect(wrapper.exists().toBe(true));
    });
    
    test("Handles Name Change", () => {
        const wrapper = shallow(<UploadEvent handleChange={() => {}} />);
    });
});


test('handleChange', () => {
    
    expect(true).toBeTruthy();
})

