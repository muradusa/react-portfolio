import React from "react";
import "./Project.css";
import project3 from "./images/facebook-clone.PNG";
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

function Project3() {
  return (
    <div className="project">
      <div className="image">
        <a target="_blank" href="https://facebook-clone-dfa38.web.app/">
          <img className="project__image" src={project3} alt="Project Image" />
        </a>
      </div>
      <div className="info">
        <div className="info__title">
          <p className="info__titleMain">Facebook Clone</p>
          <p className="info__titleSub">A clone of the Facebook Web App</p>
        </div>
        <div className="info__description">
          <ul className="experience__item">
            <li>
              Social Network site built with React and Material UI for
              client-side and powered by Firebase for backend.
            </li>
            <li>Utilizes user login/authentication.</li>
            <li>
              Fully functional backend with image uploads and instant chat
              capabilites.
            </li>
          </ul>
        </div>
        <div className="info__tech">
          <img src={reactIcon} alt="React.js" />
          <img src={firebaseIcon} alt="React.js" />
          <img src={materialui} alt="React.js" />
          <img src={nodeIcon} alt="React.js" />
          <img src={trippleIcon} alt="React.js" />
        </div>
        <div className="info__social">
          <a target="_blank" href="https://facebook-clone-dfa38.web.app/">
            <ExitToAppIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/muradusa/facebook-clone-React-Firebase"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project3;
