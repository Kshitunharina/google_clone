import React, { useState } from "react";
import axios from "axios";
import { API_KEY, CONTEXT_KEY } from "./Secret";
export const ResultsContext = React.createContext();

const ResultsContextProvider = (props) => {
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [searchTime, setSearchTime] = useState(0);

  const getResults = async (query) => {
    try {
      let URL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}`;
      const response = await axios.request(URL);
      // console.log(response.data);
      setResults(response.data.items);
      setTotalResults(response.data.searchInformation.formattedTotalResults);
      setSearchTime(response.data.searchInformation.formattedSearchTime);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ResultsContext.Provider
      value={{ getResults, results, totalResults, searchTime }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsContextProvider;
