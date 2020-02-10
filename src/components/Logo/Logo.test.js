import React from "react";
import { shallow } from "enzyme";
import Logo from "./";

describe("<Logo />", () => {
  jest.spyOn(React, "useContext").mockImplementation(() => ({
    logo: { url: "some.cool.logo.png" }
  }));
  it("renders correctly", () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});
