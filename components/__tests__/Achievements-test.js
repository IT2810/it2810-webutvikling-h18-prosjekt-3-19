import React from "react";
import Achievements from "../Achievements";
import renderer from "react-test-renderer";

test("Achievements renders correctly", () => {
  const tree = renderer.create(<Achievements />);
  expect(tree.toJSON()).toMatchSnapshot();
});
