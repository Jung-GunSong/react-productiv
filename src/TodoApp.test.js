import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";

const testTodos =[{
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
}]

describe("TodoApp component", function () {
  it("renders without crashing", function () {
    render(<TodoApp />);
  });

  it ("renders components that should be there", function(){
    const {container} = render(<TodoApp initalTodos={testTodos}/>);

    expect(container.querySelector(".NewTodoForm")).toBeInTheDocument();
  })
});