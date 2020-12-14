import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";

// delet later

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
      {/* <div className="header"> */}
      <div className="header__left">
        <span className="animatedText">MC</span>
      </div>
      <div className="header__right">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          <p>
            <span>01.</span> About
          </p>
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          <p>
            <span>02.</span> Experience
          </p>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          <p>
            <span>03.</span> Projects
          </p>
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          <p>
            <span>04.</span> Contact
          </p>
        </Link>

        {/* <p>
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
        </p> */}
        <button>Resume</button>
      </div>
    </div>
  );
}

export default Header;
