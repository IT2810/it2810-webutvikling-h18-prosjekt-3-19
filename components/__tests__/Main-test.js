import React from "react";
import Main from "../Main";
import renderer from "react-test-renderer";

describe("Testing Main", () => {
  const tree = renderer.create(<Main />);
  const tree2 = renderer.create(<Main />).getInstance();

  test("renders correctly", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  describe("Initial state", () => {
    test("noteArray should be empty", () => {
      expect(tree2.state.todoArray).toHaveLength(0);
    });
  });

  describe("Note functions", () => {
    test("prevent empty notes from being added", () => {
      tree2.addTodo();
      expect(tree2.state.todoArray).toEqual([]);
    });

    test("add new note successfully", () => {
      tree2.setState({ todoText: "do stuff" });
      tree2.addTodo();
      expect(tree2.state.todoArray).toHaveLength(1);
    });

    test("delete note successfully", () => {
      tree2.deleteTodo(0);
      expect(tree2.state.todoArray).toHaveLength(0);
      expect(tree2.state.todoArray).toEqual([]);
    });
  });
});
