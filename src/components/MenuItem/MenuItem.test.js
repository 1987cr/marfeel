import React from "react";
import { shallow } from "enzyme";
import MenuItem from "./";

describe("<MenuItem />", () => {
  const props = {
    onClick: () => {},
    selected: true,
    title: "Title"
  };

  jest.spyOn(React, "useContext").mockImplementation(() => ({
    config: {}
  }));

  it("renders correctly", () => {
    const wrapper = shallow(<MenuItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
