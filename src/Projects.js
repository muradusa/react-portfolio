import React from "react";
import "./Projects.css";
import Project1 from "./Project1.js";
import Project2 from "./Project2.js";
import Project3 from "./Project3";
import OtherProject from "./OtherProject";

function Projects() {
  return (
    <div className="projects">
      <div className="projects__header">
        <span style={{ color: "green", fontSize: "25px" }}>03.</span>
        <h1 style={{ paddingLeft: "15px", paddingRight: "15px" }}>Projects</h1>
        <span className="titleLine"></span>
      </div>
      <div className="projects__body">
        <Project1 />
        <Project2 />
        <Project3 />
      </div>
      <div className="projects__other">
        <div className="projects__otherTitle">
          <p>Other Things I Built</p>
        </div>
        <div className="projects__otherProjects">
          <div className="otherProjects__item">
            <OtherProject
              title="Facebook Clone"
              description="This is a facebook clone, built with MERN. Check it out!!!"
              tech1="Mongod DB"
              tech2="React"
              tech3="Express"
              tech4="Node"
            />
          </div>
          <div className="otherProjects__item">
            <OtherProject
              title="Facebook Clone"
              description="This is a facebook clone, built with MERN. Check it out!!!"
              tech1="Mongod DB"
              tech2="React"
              tech3="Express"
              tech4="Node"
            />
          </div>
          <div className="otherProjects__item">
            <OtherProject
              title="Youtube Clone"
              description="This is a youtube clone, built with MERN. Check it out!!!"
              tech1="Mongod DB"
              tech2="React"
              tech3="Express"
              tech4="Node"
            />
          </div>
          <div className="otherProjects__item">
            <OtherProject
              title="Facebook Clone"
              description="This is a facebook clone, built with MERN. Check it out!!!"
              tech1="Mongod DB"
              tech2="React"
              tech3="Express"
              tech4="Node"
            />
          </div>
          <div className="otherProjects__item">
            <OtherProject
              title="Facebook Clone"
              description="This is a facebook clone, built with MERN. Check it out!!!"
              tech1="Mongod DB"
              tech2="React"
              tech3="Express"
              tech4="Node"
            />
          </div>
          <div className="otherProjects__item">
            <OtherProject
              title="Facebook Clone"
              description="This is a facebook clone, built with MERN. Check it out!!!"
              tech1="Mongod DB"
              tech2="React"
              tech3="Express"
              tech4="Node"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
