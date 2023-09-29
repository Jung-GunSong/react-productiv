import React from "react";

function Quote({ quote }) {
  return (
    <div className="Quote">
      <i>{quote.text} -{quote.author}</i>
    </div>
  );
}

export default Quote;
