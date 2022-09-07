import React from "react";
import { useContext } from "react";
import { QuotesContext } from "../context/Quotes.context";
const Quotes = () => {
  const { allQuotes } = useContext(QuotesContext);

  return (
    <div>
       <h1 className="heading">All Quotes</h1>
      {allQuotes.map(({ content, author }) => (
        <>
       
          <div className="quote-details">
            <div className="quote">
              <p className="quote__text">{content}</p>
            </div>
            <p className="quote-details__author">- {author}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Quotes;
