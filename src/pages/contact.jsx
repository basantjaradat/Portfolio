import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-box">
          {/* Left Side – Form */}
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form>
              <input type="text" placeholder="Name *" required />
              <input type="email" placeholder="Email *" required />
              <textarea placeholder="Message *" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Right Side – Info */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>jaradatpasant@gmail.com</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>+972567687118</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Palestine</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
