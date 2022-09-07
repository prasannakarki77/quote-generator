import { createContext, useEffect } from "react";
import { useState } from "react";
export const QuotesContext = createContext();

export const QuotesProvider = ({ children }) => {
  const [randomQuote, setRandomQuote] = useState({});
  const [getQuotesBtn, setGetQuotesBtn] = useState(false);
  const [allQuotes, setAllQuotes] = useState([]);
  const [currentAuthor, setCurrentAuthor] = useState("");
  useEffect(() => {
    getRandomQuoteHandler();
    console.log(randomQuote);
  }, []);
  const getQuotesBtnHandler = async () => {
    const response = await fetch("https://api.quotable.io/quotes");
    const data = await response.json();
    setGetQuotesBtn((prev) => !prev);
    setAllQuotes(data.results);
  };
  const getRandomQuoteHandler = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    console.log(data);
    setRandomQuote(data);
    setCurrentAuthor(data.author);
  };
  const value = {
    getQuotesBtn,
    setGetQuotesBtn,
    getQuotesBtnHandler,
    getRandomQuoteHandler,
    randomQuote,
    allQuotes,
  };
  return (
    <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>
  );
};
