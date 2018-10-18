import "react-native";
import React from "react";
import FetchLocation from "../FetchLocation";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const myMock = jest.fn();
  const tree = renderer
    .create(<FetchLocation onGetLocation={myMock} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
