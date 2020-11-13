import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <span>MC</span>
      </div>
      <div className="header__right">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Projects</h3>
        <h3>Contact</h3>
      </div>
    </div>
  );
}

export default Header;
