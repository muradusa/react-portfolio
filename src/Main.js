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
      <div className="main__center">
        <Home />
      </div>
    </div>
  );
}

export default Main;
