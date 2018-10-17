import React from "react";
import Main from "../Main";
import renderer from "react-test-renderer";
/*
describe("Testing Main", () => {
  const tree = renderer.create(<Main />).getInstance();

  const initialState = {
    noteArray: [],
    noteText: "initialText"
  };
*/
test("renders correctly", () => {
  const tree = renderer.create(<Main />);
  expect(tree.toJSON()).toMatchSnapshot();
}); /*

  describe("Checking initial State", () => {
    test("add new Note is closed", () => {
      expect(tree.toTree().rendered.state.addNote).toBe(false);
    });

    test("input Text is empty", () => {
      expect(tree.toTree().rendered.instance.state.noteText).toBe("");
    });
  });

  describe("Note functions", () => {
    test("add new note successfully", () => {
      tree.toTree().rendered.instance.addNote();
      expect(tree.toTree().rendered.instance.state.todoList).toHaveLength(1);
    });

    test("delete note successfully", () => {
      tree.toTree().rendered.instance.deleteNote(0);
      expect(tree.toTree().rendered.instance.state.todoList).toHaveLength(0);
    });
  });
});*/
