import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", function () {
  it("renders without crashing", function () {
    render(<Footer />);
  });
});