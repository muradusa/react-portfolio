import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <span className="animatedText">MC</span>
      </div>
      <div className="header__right">
        <p>
          <span>01.</span> Home
        </p>
        <p>
          {" "}
          <span>02.</span> About
        </p>
        <p>
          {" "}
          <span>03.</span> Projects
        </p>
        <p>
          {" "}
          <span>04.</span> Contact
        </p>
        <button>Resume</button>
      </div>
    </div>
  );
}

export default Header;
