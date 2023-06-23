import React, { useState, useContext } from "react";
import Search from "./Components/Search/Search";
import SearchResuts from "./Components/SearchResults/SearchResuts";
import { BrowserRouter } from "react-router-dom";
import { ResultsContext } from "./Contexts/ResultsContext";

const App = () => {
  const [query, setQuery] = useState("");
  const [showSearchResultsPage, setShowSearchResultsPage] = useState(false);
  const resultsContext = useContext(ResultsContext);

  const getUserQueryMainPage = (data) => {
    setQuery(data);
    resultsContext.getResults(data);
    setShowSearchResultsPage(true);
  };

  const setUserQuery = (data) => setQuery(data);

  return (
    <BrowserRouter>
      {!showSearchResultsPage && <Search getQuery={getUserQueryMainPage} />}
      {showSearchResultsPage && (
        <SearchResuts query={query} setUserQuery={setUserQuery} />
      )}
      {/* </ResultsContextProvider> */}
    </BrowserRouter>
  );
};

export default App;
