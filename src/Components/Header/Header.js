import React from "react";
import "./Header.css";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <header className="header__container">
      <span>Gmail</span>
      <span>Images</span>
      <AppsIcon sx={{ fill: "#5F6368" }} />
      <Avatar alt="user" src={"/user.jpeg"} sx={{ width: 36, height: 36 }} />
    </header>
  );
};

export default Header;
