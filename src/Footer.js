import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="home__social home__socialFooter">
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
      </div>
      <p>Designed & Built by Murad Cholukov © 2021</p>
    </div>
  );
}

export default Footer;
