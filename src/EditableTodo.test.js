import React from "react";
import { render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const todo = {
  id: 1,
  title: "test1",
  description: "testing1",
  priority: 2,
}

describe("EditableTodo component", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={todo}/>);
  });

  it("renders as expected by snapshot", function () {
    const {container} = render(<EditableTodo todo={todo}/>);

    expect(container).toMatchSnapshot();
  });

  it("renders with todo", function () {
    const {getByText} = render(<EditableTodo todo={todo}/>);

    expect(getByText("test1")).toBeInTheDocument();
    expect(getByText("testing1")).toBeInTheDocument();
    expect(getByText("priority: 2")).toBeInTheDocument();
  });
});
