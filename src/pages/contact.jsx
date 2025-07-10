import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

const Contact = () => {
  return (
    <div>
        <div className="navbar-box">
        <span>BASANT JARADAT PORTFOLIO</span>
        <div className="menu">
          <Link href="/">HOME</Link>   
          <Link href="/about">ABOUT ME</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
        <a className="download" href="/basant-jaradat-CV.pdf" download>
            Download CV
        </a>
      </div>
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
    <footer className="footer">
              <p className="footer-text">
                © 2025 Basant Taher Jaradat. All rights reserved.
              </p>
              <div className="footer-icons">
                <a
                  href="https://github.com/basantjaradat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="mailto:jaradatpasant@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </footer>
    </div>
  );
};

export default Contact;
