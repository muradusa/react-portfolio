import React from "react";
import "./OtherProject.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GitHubIcon from "@material-ui/icons/GitHub";

function OtherProject({ title, description, tech1, tech2, tech3, tech4 }) {
  return (
    <div className="otherProject">
      <div className="project__icons">
        <ExitToAppIcon />
        <GitHubIcon />
      </div>
      <div className="project__title">
        <h2>{title}</h2>
      </div>
      <div className="project__description">
        <p>{description}</p>
      </div>
      <div className="project__tech">
        <p>{tech1}</p>
        <p>{tech2}</p>
        <p>{tech3}</p>
        <p>{tech4}</p>
      </div>
    </div>
  );
}

export default OtherProject;
