import React, { useState, useContext } from "react";
import "./SearchResults.css";
import CloseIcon from "@mui/icons-material/Close";
import Speak from "../svg/Speak";
import GoogleLens from "../svg/GoogleLens";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import { ResultsContext } from "../../Contexts/ResultsContext";

const SearchResuts = (props) => {
  const [userQuery, setUsersQuery] = useState(props.query);
  const [activeNav, setActiveNav] = useState("All");
  const resultsContext = useContext(ResultsContext);

  const activeChangeHandler = (name) => {
    setActiveNav(name);
  };

  const inputChangeHandler = (e) => setUsersQuery(e.target.value);

  const submitUserQueryHandler = (e) => {
    if (e.key === "Enter") {
      props.setUserQuery(userQuery);
      resultsContext.getResults(userQuery);
    }
  };

  const clearAllQuery = () => setUsersQuery("");

  return (
    <div className="search_results_container">
      <div className="search_results_header">
        <img src="./logo.png" alt="logo" />

        <div className="search_results_input_container">
          <input
            type="text"
            value={userQuery}
            onChange={inputChangeHandler}
            onKeyDown={submitUserQueryHandler}
          />
          <div className="search_results_input_icons">
            <CloseIcon
              sx={{ color: "grey", fontSize: "24px", cursor: "pointer" }}
              onClick={clearAllQuery}
            />
            <span style={{ color: "#999a", fontSize: "20px" }}>|</span>
            <Speak />
            <GoogleLens />
          </div>
        </div>

        <div className="user_help__icons">
          <SettingsOutlinedIcon sx={{ fill: "#5F6368" }} />
          <AppsIcon sx={{ fill: "#5F6368" }} />
          <Avatar
            alt="user"
            src={"/user.jpeg"}
            sx={{ width: 32, height: 32, borderRadius: "50%" }}
          />
        </div>
      </div>

      <div className="search_results_navigations">
        <div
          className={`search_results_nav_items ${
            activeNav === "All" && "search__results_nav_item_active"
          }`}
          onClick={() => activeChangeHandler("All")}
        >
          <SearchIcon sx={{ fontSize: "20px" }} />
          All
        </div>

        <a
          href="https://images.google.com/"
          target="_Abhishek"
          className={`search_results_nav_items ${
            activeNav === "Images" && "search__results_nav_item_active"
          }`}
          onClick={() => activeChangeHandler("Images")}
        >
          <ImageOutlinedIcon sx={{ fontSize: "20px" }} />
          Images
        </a>

        <a
          href="https://www.youtube.com/"
          target="_Abhishek"
          className={`search_results_nav_items ${
            activeNav === "Videos" && "search__results_nav_item_active"
          }`}
          onClick={() => activeChangeHandler("Videos")}
        >
          <OndemandVideoOutlinedIcon sx={{ fontSize: "20px" }} />
          Videos
        </a>

        <a
          href="https://www.thehindu.com/"
          target="_Abhishek"
          className={`search_results_nav_items ${
            activeNav === "News" && "search__results_nav_item_active"
          }`}
          onClick={() => activeChangeHandler("News")}
        >
          <NewspaperOutlinedIcon sx={{ fontSize: "20px" }} />
          News
        </a>

        <a
          href="https://www.google.com/maps/"
          target="_Abhishek"
          className={`search_results_nav_items ${
            activeNav === "Maps" && "search__results_nav_item_active"
          }`}
          onClick={() => activeChangeHandler("Maps")}
        >
          <PinDropOutlinedIcon sx={{ fontSize: "20px" }} />
          Maps
        </a>

        <div
          className={`search_results_nav_items hide____me ${
            activeNav === "More" && "search__results_nav_item_active"
          }`}
          onClick={() => activeChangeHandler("More")}
        >
          <MoreVertOutlinedIcon sx={{ fontSize: "20px" }} />
          More
        </div>
      </div>

      <div className="search_results_contents">
        <div className="search__results_count">
          About {resultsContext.totalResults} results (
          {resultsContext.searchTime} seconds)
        </div>

        {resultsContext?.results?.map((el, ind) => {
          return (
            <div className="search__content__cards" key={ind}>
              <a
                href={el.link}
                target="_Abhishek"
                className="search__content__card__header"
                style={{ textDecoration: "none" }}
              >
                <div className="search__content__card__link">
                  {el.formattedUrl}
                </div>
                <div className="search__result__headline">{el.title}</div>
              </a>
              <div className="search__results__description">{el.snippet}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResuts;
