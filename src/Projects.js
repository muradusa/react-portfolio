import React from "react";
import "./Projects.css";
import Project from "./Project.js";

function Projects() {
  return (
    <div className="projects">
      <div className="projects__header">
        <span style={{ color: "green", fontSize: "25px" }}>03.</span>
        <h1 style={{ paddingLeft: "15px", paddingRight: "15px" }}>Projects</h1>
        <span className="titleLine"></span>
      </div>
      <div className="projects__body">
        <Project />
      </div>
    </div>
  );
}

export default Projects;
