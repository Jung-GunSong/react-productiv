import React from "react";
import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

describe("EditableTodoList component", function () {
  it("renders without crashing", function () {
    render(<EditableTodoList />);
  });
});