import React from "react";
import "./About.css";
import myImg from "./images/fullBody2.png";
import code from "./images/code.png";
import Tech from "./Tech";

function About() {
  return (
    <div className="about" id="about">
      <div className="about__header">
        <span style={{ color: "royalblue", fontSize: "25px" }}>01.</span>
        <h1 style={{ paddingLeft: "15px", paddingRight: "15px" }}>About Me</h1>
        <span className="titleLine"></span>
      </div>
      <div className="about__section">
        <div className="about__info">
          <div className="about__bio">
            <p>
              Hello! I'm Murad, an engineer with 8 years of experience based in
              San Francisco BayArea.
              <br />
              <br />
              After getting my engineering degree from Texas Tech University, i
              worked for Energy and Construction companies, tackling various
              engineering problems along the way. During this process, i
              discovered my passion for coding and creating things that live on
              the internet.
              <br />
              <br />I am a self-taught full stack developer, specializing in
              React for client side and Firebase/MERN stack for backend. I am
              open to new opportunities and challenges as a web developer.
            </p>
          </div>
          <Tech />
        </div>

        <div className="about__photo">
          <img className="about__photoImg" src={myImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
