import React from "react";
import Home from "./Home";
import "./Main.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-scroll";

function Main() {
  return (
    <div className="main">
      <div className="main__left">
        <a target="_blank" href="https://github.com/muradusa/">
          <GitHubIcon />
        </a>
        <a target="_blank" href="https://www.instagram.com/murad_webdev/">
          <InstagramIcon />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/muradcholukov/">
          <LinkedInIcon />
        </a>
        <a target="_blank" href="https://twitter.com/muradusa">
          <TwitterIcon />
        </a>

        <span className="line"></span>
      </div>
      <div className="main__center">
        <Home />
      </div>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-10}
        duration={500}
      >
        <div className="main__right">
          <div className="email">muradwebdev@gmail.com</div>
          <span className="line"></span>
        </div>
      </Link>
    </div>
  );
}

export default Main;
