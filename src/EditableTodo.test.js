import React from "react";
import { render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

describe("EditableTodo component", function () {
  it("renders without crashing", function () {
    render(<EditableTodo />);
  });
});