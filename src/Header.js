import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`header ${show && "header__scroll"}`}>
      <div className="header__left">
        <span className="animatedText">MC</span>
      </div>
      <div className="header__right">
        <p>
          <span>01.</span> About
        </p>
        <p>
          {" "}
          <span>02.</span> Experience
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
