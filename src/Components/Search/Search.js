import React, { useState } from "react";
import "./Search.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Speak from "../svg/Speak";
import GoogleLens from "../svg/GoogleLens";

const Search = (props) => {
  const [query, setQuery] = useState(null);
  const inputChangeHandler = (e) => setQuery(e.target.value);
  const submitUserQueryHandler = (e) => {
    if (e.key === "Enter") props.getQuery(query);
  };

  const searchClickedHandler = () => props.getQuery(query);

  return (
    <div className="main__search_container">
      <Header />
      <div className="search__container">
        <img src="/logo.png" alt="logo" />

        <div className="search_input_container">
          <SearchIcon
            sx={{ color: "grey", fontSize: "20px" }}
            onClick={() => props.getQuery(query)}
          />
          <input
            type="text"
            onChange={inputChangeHandler}
            onKeyDown={submitUserQueryHandler}
          />
          <Speak />
          <GoogleLens />
        </div>

        <div className="buttons__container">
          <button onClick={searchClickedHandler}>Google Search</button>
          <Link to="https://www.google.com/doodles">I'm Feeling Lucky</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
