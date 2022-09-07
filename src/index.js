import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { QuotesProvider } from "./context/Quotes.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuotesProvider>
      <App />
    </QuotesProvider>
  </React.StrictMode>
);
