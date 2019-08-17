import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import "jest-styled-components";

import List from "./";

describe("<List />", () => {
  it("Show List correctly", () => {
    const mockCallBack = jest.fn();

    const component = renderer.create(
      <List items={[1, 2, 3, 4]} renderItems={mockCallBack} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
