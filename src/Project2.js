import React from "react";
import "./ProjectO.css";
import project from "./images/USA-TM-Chat.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GitHubIcon from "@material-ui/icons/GitHub";
import reactIcon from "./images/react-icon.png";
import reduxIcon from "./images/redux-icon.png";
import firebaseIcon from "./images/firebase-icon.png";
import expressIcon from "./images/express-icon.png";
import mongodbIcon from "./images/mongodb-icon.png";
import nodeIcon from "./images/node-icon.png";
import stripeIcon from "./images/stripe-icon.png";
import gitIcon from "./images/Git.png";
import trippleIcon from "./images/JS.png";
import aws from "./images/aws.png";
import mysql from "./images/mysql.png";
import materialui from "./images/material_ui.png";

function Project2() {
  return (
    <div className="projectO">
      <div className="info__O">
        <div className="info__titleO">
          <p className="info__titleMain">USA-TM Chat</p>
          <p className="info__titleSub">
            The only social platform where people from USA and Turkmenistan
            share experiences.
          </p>
        </div>

        <div className="info__description">
          <ul className="experience__item">
            <li>
              Worked with a team of three designers to build a marketing website
            </li>
            <li>
              Helped solidify a brand direction for blistabloc that spans both
              packaging and web
            </li>
            <li>
              Interfaced with clients on a weekly basis, providing technological
              expertise
            </li>
          </ul>
        </div>
        <div className="info__tech">
          <img src={reactIcon} alt="React.js" />
          <img src={reduxIcon} alt="React.js" />
          <img src={firebaseIcon} alt="React.js" />
          <img src={materialui} alt="React.js" />
          <img src={nodeIcon} alt="React.js" />
          <img src={trippleIcon} alt="React.js" />
        </div>
        <div className="info__social">
          <a target="_blank" href="https://discord-clone-9079e.web.app/">
            <ExitToAppIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/muradusa/USA-TM-Chat-react-firebase"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="image">
        <a target="_blank" href="https://discord-clone-9079e.web.app/">
          <img className="project__image" src={project} alt="Project Image" />
        </a>
      </div>
    </div>
  );
}

export default Project2;
