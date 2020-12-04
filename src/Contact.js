import React from "react";
import "./Contact.css";
import contactImage from "./images/Me.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__header">
        <span style={{ color: "green", fontSize: "25px" }}>04.</span>
        <h1 style={{ paddingLeft: "15px", paddingRight: "15px" }}>
          Get In Touch
        </h1>
        <span className="titleLine"></span>
      </div>
      <div className="contact__hero">
        <p>
          I am open for new opportunities. Whether you have a question or just
          want to say hi, feel free to connect.
        </p>
      </div>

      <div className="contact__body">
        <div
          className="contact__image"
          style={{ backgroundImage: `url(${contactImage}` }}
        ></div>
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
        </div>
      </div>
    </div>
  );
}

export default Contact;
