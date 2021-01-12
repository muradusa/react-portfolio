import React from "react";
import "./Project.css";
import project3 from "./images/facebook-clone.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GitHubIcon from "@material-ui/icons/GitHub";

function Project3() {
  return (
    <div className="project">
      <div className="image">
        <img className="project__image" src={project3} alt="Project Image" />
      </div>
      <div className="info">
        <div className="info__title">
          <p>Facebook Clone</p>
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
          <p>React.js</p>
          <p>Firebase</p>
          <p>Redux</p>
          <p>Node.js</p>
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
