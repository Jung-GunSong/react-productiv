import React from "react";
import { useState } from "react";
import Quote from "./Quote";
import "./InspirationApp.css";

function InspirationApp() {
  const [quote, setQuote] = useState({});

  const QUOTE_API_BASE_URL = "https://inspo-quotes-api.herokuapp.com/quotes";

  async function handleClick() {
    const res = await fetch(`${QUOTE_API_BASE_URL}/random`);
    const { quote } = await res.json();
    setQuote({ ...quote });
  }

  return (
      <div className="InspirationApp">
        {quote.text && <Quote quote={quote} />}

        <button
          onClick={handleClick}
          className="InspirationApp-button">
          {quote.text ? "Nü quøte" : "Click here for an inspirational quøte!"}
        </button>
      </div>
  );
}

export default InspirationApp;
