import React, { useEffect } from "react";
import "../styles/quote.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { QuotesContext } from "../context/Quotes.context";
import { useContext } from "react";
const Quote = () => {
  const {
    getQuotesBtnHandler,
    getQuotesBtn,
    getRandomQuoteHandler,
    randomQuote,
  } = useContext(QuotesContext);
  useEffect(() => {
    getRandomQuoteHandler();
  }, []);
  return (
    <div>
      <div className="quote">
        <p className="quote__text">{randomQuote.content}</p>
      </div>
      <div className="author-container" onClick={getQuotesBtnHandler}>
        <div className="author">
          <p className="author__name">{randomQuote.author}</p>
          <p className="author__type">{randomQuote.tags[0]}</p>
        </div>
        <HiOutlineArrowNarrowRight size={30} />
      </div>
    </div>
  );
};

export default Quote;
