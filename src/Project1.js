import React from "react";
import "./Project.css";
import project1 from "./images/All-Things-Turkmen.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GitHubIcon from "@material-ui/icons/GitHub";

function Project1() {
  return (
    <div className="project">
      <div className="image">
        <img src={project1} alt="Project Image" />
      </div>
      <div className="info">
        <div className="info__title">
          <p>All Things Turkmen</p>
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
          {/* <p>
            A nicer look at your GitHub profile and repository stats with data
            visualizations of your top languages and stars. Sort through your
            top repos by number of stars, forks, and size.
          </p> */}
        </div>

        <div className="info__tech">
          <p>React.js</p>
          <p>Firebase</p>
          <p>Redux</p>
          <p>Node.js</p>
        </div>
        <div className="info__social">
          <a target="_blank" href="https://clone-5e751.web.app/">
            <ExitToAppIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/muradusa/all-things-turkmen-React"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project1;
