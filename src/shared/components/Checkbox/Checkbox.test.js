import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import "jest-styled-components";

import Checkbox from "./";

describe("<Checkbox />", () => {
  it("Show Checkbox correctly", () => {
    const mockCallBack = jest.fn();

    const component = renderer.create(<Checkbox handleChange={mockCallBack} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("onChange works correcly", () => {
    const mockCallBack = jest.fn();

    const component = mount(<Checkbox handleChange={mockCallBack} />);
    component.find("input").simulate("change");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
