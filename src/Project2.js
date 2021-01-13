import React from "react";
import "./ProjectO.css";
import project from "./images/USA-TM-Chat.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GitHubIcon from "@material-ui/icons/GitHub";

function Project2() {
  return (
    <div className="project">
      <div className="info__O">
        <div className="info__title">
          <p>USA TM Chat</p>
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
