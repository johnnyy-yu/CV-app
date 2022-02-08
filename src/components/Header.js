import React from "react";
import { Link } from "react-router-dom";
import documentIcon from "../img/documentIcon.png";

function Header(props) {
  const { backButton } = props;

  return (
    <header>
      <div>
        <img src={documentIcon} alt="" />
        Curriculum Vitae App
      </div>
      {backButton && (
        <div>
          <button
            type="button"
            className="print-button"
            onClick={() => {
              window.print();
            }}
          >
            Print
          </button>
          <Link to="/cv-app">
            <button type="button" id="go-back-button">
              Go Back
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
