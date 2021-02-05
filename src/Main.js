import React from "react";
import Home from "./Home";
import "./Main.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-scroll";

const background =
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80";

function Main() {
  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="main__center">
        <Home />
      </div>
    </div>
  );
}

export default Main;
