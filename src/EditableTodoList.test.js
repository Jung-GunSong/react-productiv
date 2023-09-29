import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

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
  priority: 3,
}];


describe("EditableTodoList component", function () {
  it("renders without crashing", function () {
    render(<EditableTodoList todos={testTodos} />);
  });

  it("matches snapshot", function () {
    const { container } = render(<EditableTodoList todos={testTodos} />);
    expect(container).toMatchSnapshot();
  });

  it("renders todos correctly", function () {
    const { queryByText, container } = render(<EditableTodoList todos={testTodos} />);
    expect(queryByText("test1")).toBeInTheDocument();
    expect(queryByText("testing1")).toBeInTheDocument();
    expect(container.querySelector(".EditableTodo-toggle")).toBeInTheDocument();
    expect(container.querySelector(".EditableTodo-delBtn")).toBeInTheDocument();
  });

  it("renders edit form on click", function () {
    const { container } = render(<EditableTodoList todos={testTodos} />);

    //click edit button
    fireEvent.click(container.querySelector(".EditableTodo-toggle"));
    expect(container.querySelector(".NewTodoForm")).toBeInTheDocument();
  });

});
