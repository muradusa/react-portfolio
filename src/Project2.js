import React from "react";
import "./ProjectO.css";
import project from "./images/amazon.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GitHubIcon from "@material-ui/icons/GitHub";

function Project2() {
  return (
    <div className="project">
      <div className="info__O">
        <div className="info__title">
          <p>Facebook Clone</p>
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
          <ExitToAppIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="image">
        <img src={project} alt="Project Image" />
      </div>
    </div>
  );
}

export default Project2;
