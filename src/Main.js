import React from "react";
import Home from "./Home";
import "./Main.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";

function Main() {
  return (
    <div className="main">
      <div className="main__left">
        <InstagramIcon />
        <TwitterIcon />
        <GitHubIcon />
        <LinkedInIcon />
        <span className="line"></span>
      </div>
      <div className="main__center">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <div className="main__right">
        <div className="email">muradwebdev@gmail.com</div>
        <span className="line"></span>
      </div>
    </div>
  );
}

export default Main;
