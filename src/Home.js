import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__hero">
        <p>
          Hi, I'm <span>MURAD CHOLUKOV</span> .
        </p>
        <p>I build things for the web.</p>
        <p className="hero__text">
          I'm a software engineer based in San Francisco, CA specializing in
          building (and occasionally designing) exceptional websites,
          applications, and everything in between.
        </p>
      </div>
    </div>
  );
}

export default Home;
