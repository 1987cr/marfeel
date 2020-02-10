import React from "react";
import { shallow } from "enzyme";
import Burger from "./";

describe("<Burger />", () => {
  const props = {
    color: "#fff",
    onClick: () => {}
  };

  it("renders correctly", () => {
    const wrapper = shallow(<Burger {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
