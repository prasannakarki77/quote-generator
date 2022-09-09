import React from "react";
import "../styles/quote.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { QuotesContext } from "../context/Quotes.context";
import { useContext } from "react";
const Quote = () => {
  const { getQuotesBtnHandler, randomQuote } = useContext(QuotesContext);
  const { content, author, tags } = randomQuote;
  return (
    <>
      {randomQuote.length && (
        <div>
          <div className="quote-details">
            <div className="quote">
              <p className="quote__text">{content}</p>
            </div>
          </div>
          <div className="author-container" onClick={getQuotesBtnHandler}>
            <div className="author">
              <p className="author__name">{author}</p>
              <p className="author__type">{tags[0]}</p>
            </div>
            <HiOutlineArrowNarrowRight size={30} />
          </div>
        </div>
      )}
    </>
  );
};

export default Quote;
