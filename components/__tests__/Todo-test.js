import React from "react";
import Todo from "../Todo";
import renderer from "react-test-renderer";

test("Todo renders correctly", () => {
  const tree = renderer.create(<Todo val="" />);
  expect(tree.toJSON()).toMatchSnapshot();
});
