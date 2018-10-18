import React from "react";
import Todo from "../Todo";
import renderer from "react-test-renderer";

const removeTodoElement = jest.fn();

describe("Testing Todo-component", () => {
  const tree = renderer.create(<Todo val={""} />);
  const tree2 = renderer
    .create(<Todo val={""} removeTodoElement={removeTodoElement} />)
    .getInstance();

  describe("Testing rendering", () => {
    test("Todo renders correctly", () => {
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe("Testing functionality", () => {
    test("Checkbox is checked", () => {
      tree2.checkBoxChecked();
      expect(tree2.state.dialogVisible).toBeFalsy();
    });

    test("showDialog", () => {
      tree2.showDialog();
      expect(tree2.state.dialogVisible).toBeTruthy();
    });

    test("cancel handler", () => {
      tree2.handleCancel();
      expect(tree2.state.dialogVisible).toBeFalsy();
    });
  });
});
