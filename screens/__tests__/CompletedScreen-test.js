import React from "react";
import CompletedScreen from "../CompletedScreen";
import renderer from "react-test-renderer";

test("CompletedScreen renders correctly", () => {
  const tree = renderer.create(<CompletedScreen />);
  expect(tree.toJSON()).toMatchSnapshot();
});
