
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <style jsx>{`
        .navbar-box {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
          padding: 1rem;
          background-color: rgba(255, 255, 255, 0.2);
          border: 2px solid black;
          border-bottom: 6px solid black;
          border-radius: 3rem;
          font-weight: bold;
          margin: 1rem auto;
          width: 95%;
          max-width: 1200px;
        }

        @media (min-width: 768px) {
          .navbar-box {
            flex-direction: row;
            justify-content: space-between;
            height: 3.5rem;
            padding: 0.5rem 2rem;
          }
        }

        .menu a {
          margin: 0 0.75rem;
          text-decoration: none;
          color: #333;
        }

        .menu a:hover {
          color: #F2C067;
        }

        .download {
          color: #F2C067;
          text-decoration: underline;
          font-size: large;
        }
      `}</style>

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
    </>
  );
};

export default Navbar;
