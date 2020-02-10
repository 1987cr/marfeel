import React from "react";
import { shallow } from "enzyme";
import Article, { Thumbnail, Title, Paragrapgh } from "./";

describe("<Article />", () => {
  const props = {
    title: "Title",
    description: "Description"
  };

  it("renders correctly", () => {
    const wrapper = shallow(<Article {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders title and description", () => {
    const wrapper = shallow(<Article {...props} />);
    expect(wrapper.find(Title).text()).toEqual(props.title);
    expect(wrapper.find(Paragrapgh).text()).toEqual(props.description);
  });

  it("renders without an image", () => {
    const wrapper = shallow(<Article {...props} />);
    expect(wrapper.find(Thumbnail)).toHaveLength(0);
  });

  it("renders with an image", () => {
    const wrapper = shallow(<Article {...props} thumbnail="some.cool.png" />);
    expect(wrapper.find(Thumbnail)).toHaveLength(1);
  });
});
