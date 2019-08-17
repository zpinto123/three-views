import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import "jest-styled-components";

import Button from "./";

describe("<Button />", () => {
  it("Show Button correctly", () => {
    const mockCallBack = jest.fn();

    const component = renderer.create(
      <Button handleClick={mockCallBack}>Button test</Button>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("onClick works correcly", () => {
    const mockCallBack = jest.fn();

    const component = mount(<Button handleClick={mockCallBack}>Ok!</Button>);
    component.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
