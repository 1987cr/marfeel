import React from "react";
import { shallow } from "enzyme";
import SectionMenu, { List } from "./";

describe("<SectionMenu />", () => {
  const tabs = {
    home: "Home",
    politics: "Politics",
    sports: "Sports"
  };

  jest.spyOn(React, "useContext").mockImplementation(() => ({
    tabs
  }));

  it("renders correctly", () => {
    const wrapper = shallow(<SectionMenu />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders all tabs", () => {
    const wrapper = shallow(<SectionMenu />);
    expect(wrapper.find(List).children()).toHaveLength(
      Object.keys(tabs).length
    );
  });
});
