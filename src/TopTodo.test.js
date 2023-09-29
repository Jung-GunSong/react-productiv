import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

describe("TopTodo component", function () {
  it("renders without crashing", function () {
    render(<TopTodo />);
  });
});