import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

const testTodo = [{
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

describe("TopTodo component", function () {
  it("renders without crashing", function () {
    render(<TopTodo todos={testTodo}/>);
  });

  it("matches snapshot", function () {
    const {container} = render(<TopTodo todos={testTodo}/>);
    expect(container).toMatchSnapshot();
  });

  it("renders top todo if todos present", function () {
    const {getByText} = render(<TopTodo todos={testTodo}/>);
    expect(getByText("test2")).toBeInTheDocument();
    expect(getByText("testing testing")).toBeInTheDocument();
    expect(getByText("priority: 1")).toBeInTheDocument();
  });


});
