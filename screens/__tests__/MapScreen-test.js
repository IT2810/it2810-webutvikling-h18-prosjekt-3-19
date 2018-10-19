import React from "react";
import MapScreen from "../MapScreen";
import renderer from "react-test-renderer";

test("MapScreen renders correctly", () => {
  const tree = renderer.create(<MapScreen />);
  expect(tree.toJSON()).toMatchSnapshot();
});
