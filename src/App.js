import { useContext, useState } from "react";
import { TbRefresh } from "react-icons/tb";
import Quote from "./components/Quote";
import Quotes from "./components/Quotes";
import { QuotesContext } from "./context/Quotes.context";
import "./styles/app.scss";
function App() {
  const { getQuotesBtn, getRandomQuoteHandler, randomQuote } =
    useContext(QuotesContext);
  return (
    <div className="container">
      <div>
        <button className="random-btn" onClick={getRandomQuoteHandler}>
          random <TbRefresh />
        </button>
      </div>
      <div className="quotes-container">
        {getQuotesBtn ? <Quotes /> : <Quote />}
      </div>
    </div>
  );
}

export default App;
