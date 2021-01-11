import React from "react";
import "./Home.css";
import { Link } from "react-scroll";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Home() {
  return (
    <div className="home">
      <div className="home__hero">
        <p>
          <span className="greeting">Hi, my name is</span> <br />
          <span className="animatedText">MURAD CHOLUKOV.</span>
        </p>
        <p className="home__description">
          I am a full-stack web developer, who loves building things for the
          web.
        </p>

        <div className="home__social">
          <a target="_blank" href="https://github.com/muradusa/">
            <GitHubIcon />
          </a>
          <a target="_blank" href="https://www.instagram.com/murad_webdev/">
            <InstagramIcon />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/muradcholukov/">
            <LinkedInIcon />
          </a>
          <a target="_blank" href="https://twitter.com/muradusa">
            <TwitterIcon />
          </a>
        </div>

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
