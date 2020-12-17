import React from "react";
import "./Home.css";
import { Link } from "react-scroll";

function Home() {
  return (
    <div className="home">
      <div className="home__hero">
        <p>
          <span className="greeting">Hi, my name is</span> <br />{" "}
          <span className="animatedText">MURAD CHOLUKOV.</span>
        </p>
        <p>I build things for the web.</p>
        <p className="hero__text">
          I'm a software engineer based in San Francisco, CA specializing in
          building (and occasionally designing) exceptional websites,
          applications, and everything in between.
        </p>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          <button>Get In Touch</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
