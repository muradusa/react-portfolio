import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import resume from "./images/Murad_Cholukov_resume.pdf";

function Header() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`header ${show && "header__scroll"}`}>
      <div className="header__left">
        <span>MC</span>
      </div>
      <div className="header__right">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <p>About</p>
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <p>Experience</p>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <p>Projects</p>
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <p>Contact</p>
        </Link>

        <button>
          <a className="resume" href={resume} download>
            Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default Header;
// Delete later
