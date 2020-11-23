import React from "react";
import "./Project.css";
import project from "./images/giphy.gif";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GitHubIcon from "@material-ui/icons/GitHub";

function Project() {
  return (
    <div className="project">
      <div className="image">
        <img src={project} alt="Project Image" />
      </div>
      <div className="info">
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
    </div>
  );
}

export default Project;
