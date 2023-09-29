import React from "react";
import { render, fireEvent, waitFor} from "@testing-library/react";
import InspirationApp from "./InspirationApp";

describe("TodoApp component", function () {
  it("renders without crashing", function () {
    render(<InspirationApp />);
  });

  it ("renders 'click here' button on initial render", function(){
    const {getByText} = render(<InspirationApp />);

    expect(getByText("Click here for an inspirational quøte!")).toBeInTheDocument();
  })

  it ("renders quote after clicking initial button", async function(){
    const {getByText, container} = render(<InspirationApp />);
    const getQuoteButton = container.querySelector(".InspirationApp-button");
    fireEvent.click(getQuoteButton);

    await waitFor(() => {
      expect(getByText("Nü quøte")).toBeInTheDocument();
      expect(container.querySelector(".Quote")).toBeInTheDocument();
    });
  });

  it ("renders quote after clicking button multiple times", async function(){
    const {getByText, container} = render(<InspirationApp />);
    const getQuoteButton = container.querySelector(".InspirationApp-button");
    fireEvent.click(getQuoteButton);
    fireEvent.click(getQuoteButton);
    fireEvent.click(getQuoteButton);

    await waitFor(() => {
      expect(getByText("Nü quøte")).toBeInTheDocument();
      expect(container.querySelector(".Quote")).toBeInTheDocument();
    });
  });
});
