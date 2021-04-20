import React from "react";
import { shallow, mount } from "enzyme";
import HomePage from "./HomePage";
import toJson from "enzyme-to-json";


it("renders without crashing", () => {
 shallow(<HomePage />);
});
