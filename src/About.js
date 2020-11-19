import React from "react";
import "./About.css";
import myImg from "./images/me1.jpg";

function About() {
  return (
    <div className="about">
      <div className="about__header">
        <span style={{ color: "green", fontSize: "25px" }}>01.</span>
        <h1 style={{ paddingLeft: "15px", paddingRight: "15px" }}>About Me</h1>
        <span className="titleLine"></span>
      </div>
      <div className="about__section">
        <div className="about__info">
          <div className="about__bio">
            <p>
              Hello! I'm Murad, a software engineer based in San Francisco, CA.{" "}
              <br />
              <br />I enjoy creating things that live on the internet, whether
              that be websites, applications, or anything in between. My goal is
              to always build products that provide pixel-perfect, performant
              experiences.
              <br />
              <br />
              Shortly after graduating from Northeastern University, I joined
              the engineering team at Upstatement where I work on a wide variety
              of interesting and meaningful projects on a daily basis.
            </p>
          </div>
          <div className="about__tech">
            <p>Here are a few technologies I've been working with recently:</p>
            <div className="technologies" style={{ display: "flex" }}>
              <div className="tech1">
                {" "}
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node.js</li>
                </ul>
              </div>
              <div className="tach2">
                {" "}
                <ul>
                  <li>HTML & CSS</li>
                  <li>Firebase</li>
                  <li>Express.js</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="about__photo">
          <img src={myImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
