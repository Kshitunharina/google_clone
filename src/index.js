import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ResultsContextProvider from "./Contexts/ResultsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ResultsContextProvider>
    <App />
  </ResultsContextProvider>
);
