import React from "react";
import { Link } from "react-router-dom";
import documentIcon from "../img/documentIcon.png";

function Header(props) {
  const { backButton } = props;

  return (
    <header>
      <img src={documentIcon} alt="" />
      Curriculum Vitae App
      {backButton && (
        <Link to="/react-gh-pages">
          <button type="button" id="go-back-button">
            Go Back
          </button>
        </Link>
      )}
    </header>
  );
}

export default Header;
