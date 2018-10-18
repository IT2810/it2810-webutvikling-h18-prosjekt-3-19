import "react-native";
import React from "react";
import UsersMap from "../UsersMap";
import renderer from "react-test-renderer";

jest.mock("react-native-maps", () => "MapView");
it("renders correctly", () => {
  const tree = renderer
    .create(<UsersMap userLocation={null} usersPlaces={[]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
