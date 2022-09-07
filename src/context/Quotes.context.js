import { createContext, useEffect } from "react";
import { useState } from "react";
import { randomQuote } from "quotegarden";
export const QuotesContext = createContext();

export const QuotesProvider = ({ children }) => {
  const [randomQuote, setRandomQuote] = useState(false);
  const [getQuotesBtn, setGetQuotesBtn] = useState(false);

  const getQuotesBtnHandler = () => {
    setGetQuotesBtn((prev) => !prev);
  };
  const getRandomQuoteHandler = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    console.log(data);
    setRandomQuote(data);
  };
  const value = {
    getQuotesBtn,
    setGetQuotesBtn,
    getQuotesBtnHandler,
    getRandomQuoteHandler,
    randomQuote,
  };
  return (
    <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>
  );
};
