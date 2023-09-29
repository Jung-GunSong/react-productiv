import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const todo = {
  id: 1,
  title: "test1",
  description: "testing1",
  priority: 2,
}

describe("Todo component", function () {
  it("renders without crashing", function () {
    render(<Todo todo={todo} />);
  });

  it("renders as expected by snapshot", function () {
    const {container} = render(<Todo todo={todo} />);

    expect(container).toMatchSnapshot();
  });

  it("renders properly with todo", function () {
    const {getByText} = render(<Todo todo={todo} />);

    expect(getByText("test1")).toBeInTheDocument();
    expect(getByText("testing1")).toBeInTheDocument();
    expect(getByText("priority: 2")).toBeInTheDocument();
  });


});
