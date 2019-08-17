import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import "jest-styled-components";

import Input from "./";

describe("<Input />", () => {
  it("Show Input correctly", () => {
    const mockCallBack = jest.fn();

    const component = renderer.create(
      <Input value="Hello, i'm an input!" handleChange={mockCallBack} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("onChange works correcly", () => {
    const mockCallBack = jest.fn();

    const component = mount(
      <Input value="Hello, i'm an input!" handleChange={mockCallBack} />
    );
    component.find("input").simulate("change");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
