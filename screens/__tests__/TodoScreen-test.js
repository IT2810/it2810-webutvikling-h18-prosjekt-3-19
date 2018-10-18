import React from "react";
import TodoScreen from "../TodoScreen";
import renderer from "react-test-renderer";

test("TodoScreen renders correctly", () => {
  const tree = renderer.create(<TodoScreen />);
  expect(tree.toJSON()).toMatchSnapshot();
});
