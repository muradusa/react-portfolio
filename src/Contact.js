import React from "react";
import "./Contact.css";
import contactImage from "./images/Me.png";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Link } from "react-scroll";
import InstagramEmbed from "react-instagram-embed";
import contactBanner from "./images/contact-us-banner.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact__header">
        <span style={{ color: "green", fontSize: "25px" }}>04.</span>
        <h1 style={{ paddingLeft: "15px", paddingRight: "15px" }}>
          Get In Touch
        </h1>
        <span className="titleLine"></span>
      </div>
      <div className="contact__hero"></div>
      <div
        className="contact__body"
        style={{
          backgroundImage: `url(${contactBanner}`,
        }}
      >
        <div className="contact__form">
          <form name="contact" action="/contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <p>Name</p>
            <input required type="text" name="name" placeholder="Your Name" />
            <p>Email</p>
            <input
              required
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <p>Subject</p>
            <input name="subject" type="text" placeholder="Subject" />
            <p>Message</p>
            <textarea
              required
              name="message"
              placeholder="Message"
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit" className="contact__button">
              Send
            </button>
          </form>
          <div className="home__social contact__social">
            <a target="_blank" href="https://github.com/muradusa/">
              <GitHubIcon />
            </a>
            <a target="_blank" href="https://www.instagram.com/murad_webdev/">
              <InstagramIcon />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/muradcholukov/"
            >
              <LinkedInIcon />
            </a>
            <a target="_blank" href="https://twitter.com/muradusa">
              <TwitterIcon />
            </a>
          </div>
        </div>
        <div className="contact__text">
          <p>I am open for new opportunities. Let's connect.</p>
        </div>
      </div>
      <div className="upArrow">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
        >
          <ArrowUpwardIcon className="arrowUpwardIcon" fontSize="30px" />
          <p>To The Top</p>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
