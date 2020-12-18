import React from "react";
import "./About.css";
import myImg from "./images/fullBody2.png";
import code from "./images/code.png";
import Tech from "./Tech";

function About() {
  return (
    <div className="about" id="about">
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
          <Tech />
          {/* <div className="github">
            <img
              style={{
                height: "100px",
                objectFit: "contain",
                paddingTop: "25px",
              }}
              src="http://ghchart.rshah.org/1D7912/muradusa"
              alt="Murad Cholukov's Github"
            />
          </div> */}
        </div>

        <div className="about__photo">
          <img src={myImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
