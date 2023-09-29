import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";

const testTodos = [{
  id: 1,
  title: "test1",
  description: "testing1",
  priority: 2,
},
{
  id: 2,
  title: "test2",
  description: "testing testing",
  priority: 1,
},
{
  id: 3,
  title: "test3",
  description: "still testing....",
  priority: 2,
}];

describe("TodoApp component", function () {
  it("renders without crashing", function () {
    render(<TodoApp initialTodos={testTodos} />);
  });

  it("matches snapshot", function () {
    const { container } = render(<TodoApp initialTodos={testTodos} />);
    expect(container).toMatchSnapshot();
  });

  it("renders components that should be there", function () {
    const { container } = render(<TodoApp initialTodos={testTodos} />);
    expect(container.querySelector(".NewTodoForm")).toBeInTheDocument();
  });

  it("should render properly with no toods", function () {
    const { queryByText } = render(<TodoApp />);
    expect(queryByText("You have no todos.")).toBeInTheDocument();
    expect(queryByText("No todos yet!")).toBeInTheDocument();
  });

  it("adds a todo on form submit", function () {
    const { getByLabelText, queryByText, container, queryAllByText } = render(<TodoApp />);

    const titleInput = container.querySelector("#newTodo-title");
    const descInput = container.querySelector("#newTodo-description");
    const priorityInput = getByLabelText("Priority:");
    const submitBtn = queryByText("Gø!");

    fireEvent.change(titleInput, { target: { value: "testTitle" } });
    fireEvent.change(descInput, { target: { value: "testDesc" } });
    fireEvent.change(priorityInput, { target: { value: 2 } });
    fireEvent.click(submitBtn);

    expect(queryAllByText("testTitle")[0]).toBeInTheDocument();
    expect(queryAllByText("testDesc")[0]).toBeInTheDocument();
  });

  it("edits a todo on form", function () {
    const { getByLabelText, queryByText, container, queryAllByText, getAllByLabelText } = render(<TodoApp initialTodos={testTodos}/>);

    fireEvent.click(container.querySelector(".EditableTodo-toggle"));

    const titleInput = container.querySelector("#newTodo-title");
    const descInput = container.querySelector("#newTodo-description");
    const priorityInput = getAllByLabelText("Priority:")[0];
    const submitBtn = queryAllByText("Gø!")[0];

    fireEvent.change(titleInput, { target: { value: "testTitle" } });
    fireEvent.change(descInput, { target: { value: "testDesc" } });
    fireEvent.change(priorityInput, { target: { value: 2 } });
    fireEvent.click(submitBtn);

    expect(queryByText("testTitle")).toBeInTheDocument();
    expect(queryByText("testDesc")).toBeInTheDocument();
  });

  it("editing a todo to make it a top priority works", function () {
    const { getByLabelText, queryByText, container, queryAllByText, getAllByLabelText } = render(<TodoApp initialTodos={testTodos}/>);

    fireEvent.click(container.querySelector(".EditableTodo-toggle"));

    const titleInput = container.querySelector("#newTodo-title");
    const descInput = container.querySelector("#newTodo-description");
    const priorityInput = getAllByLabelText("Priority:")[0];
    const submitBtn = queryAllByText("Gø!")[0];

    fireEvent.change(titleInput, { target: { value: "testTitle" } });
    fireEvent.change(descInput, { target: { value: "testDesc" } });
    fireEvent.change(priorityInput, { target: { value: 1 } });
    fireEvent.click(submitBtn);

    expect(queryAllByText("testTitle").length).toEqual(2);
    expect(queryAllByText("testDesc").length).toEqual(2);
  });

  it("deletes a todo on clicking delete button", function () {
    const { container, queryByText } = render(<TodoApp initialTodos={testTodos} />);

    fireEvent.click(container.querySelector(".EditableTodo-delBtn"));
    expect(queryByText("test1")).not.toBeInTheDocument();
  });
});
