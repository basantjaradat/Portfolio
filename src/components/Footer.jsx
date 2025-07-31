import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <style jsx>{`
        .footer {
          width: 100%;
          background-color: #ffe6c2;
          padding: 1rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Nunito', sans-serif;
          font-size: 0.95rem;
          position: relative;
        }

        @media (min-width: 768px) {
          .footer {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .footer-text {
          color: #4b5563;
        }

        .footer-icons a {
          color: #1f2937;
          margin-left: 1rem;
          font-size: 1.2rem;
          transition: color 0.3s;
        }

        .footer-icons a:hover {
          color: #2563eb;
        }
      `}</style>

      <footer className="footer">
        <p className="footer-text">© 2025 Basant Taher Jaradat. All rights reserved.</p>
        <div className="footer-icons">
          <a href="https://github.com/basantjaradat" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:jaradatpasant@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
