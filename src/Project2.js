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
          <p>USA-TM-Chat</p>
        </div>
        <div className="info__description">
          <p>
            A nicer look at your GitHub profile and repository stats with data
            visualizations of your top languages and stars. Sort through your
            top repos by number of stars, forks, and size.
          </p>
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
        <img className="project__image" src={project} alt="Project Image" />
      </div>
    </div>
  );
}

export default Project2;
