import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__top">India</div>
      <div className="footer__bottom">
        <div>
          <Link to="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">
            About
          </Link>
          <Link to="https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2m--ahpm-0000000130-0000000000&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
            Advertising
          </Link>
          <Link to="https://www.google.com/intl/en_in/business/" className="hide__3">Business</Link>
          <Link
            to="https://www.google.com/search/howsearchworks/?fg=1"
            className="hide__link"
          >
            How Search works
          </Link>
        </div>
        <div>
          <Link to="https://policies.google.com/privacy?hl=en-IN&fg=1">
            Privacy
          </Link>
          <Link to="https://policies.google.com/terms?hl=en-IN&fg=1">
            Terms
          </Link>
          <Link to="#" className="hide__2">
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
