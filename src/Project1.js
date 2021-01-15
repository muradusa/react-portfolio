import React from "react";
import "./Project.css";
import project1 from "./images/All-Things-Turkmen.png";
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

function Project1() {
  return (
    <div className="project">
      <div className="image">
        <a target="_blank" href="https://clone-5e751.web.app/">
          <img className="project__image" src={project1} alt="Project Image" />
        </a>
      </div>
      <div className="info">
        <div className="info__title">
          <p className="info__titleMain">All Things Turkmen</p>
          <p className="info__titleSub">
            A one stop shop to buy 100% authentic products from Turkmenistan
          </p>
        </div>

        <div className="info__description">
          <ul className="experience__item">
            <li>
              E-commerce site built with React and Material UI for client-side
              and powered by Firebase for backend.
            </li>
            <li>
              Supports fully functional Stripe payment system and user
              authentication.
            </li>
            <li>Redux was used to manage user & basket state.</li>
          </ul>
        </div>

        <div className="info__tech">
          {/* <p>React.js</p> */}
          <img src={reactIcon} alt="React.js" />
          <img src={reduxIcon} alt="React.js" />
          <img src={stripeIcon} alt="React.js" />
          <img src={firebaseIcon} alt="React.js" />
          <img src={materialui} alt="React.js" />
          <img src={nodeIcon} alt="React.js" />
          <img src={trippleIcon} alt="React.js" />
        </div>
        <div className="info__social">
          <a target="_blank" href="https://clone-5e751.web.app/">
            <ExitToAppIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/muradusa/All-Things-Turkmen"
          >
            {/* <p>GitHub Repo</p> */}
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project1;
