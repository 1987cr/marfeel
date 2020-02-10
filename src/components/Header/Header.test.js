import React from "react";
import { shallow } from "enzyme";
import Header from "./";

describe("<Header />", () => {
  jest.spyOn(React, "useContext").mockImplementation(() => ({
    burger: { color: "#fff" }
  }));

  it("renders correctly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
