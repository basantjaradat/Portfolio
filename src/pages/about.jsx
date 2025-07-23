import React from "react";
import {profileData} from "../data/profile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';


const About = () => {
  const { about, education, experience, skills, languages } = profileData;

  return (
    <div >
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
    <div className="profile-container">
      <section className="about-section">
        <h2>About Me</h2>
        <p className="about-text">{about}</p>

        <div className="skills-grid">
          <div className="skills-box">
            <h3>Languages</h3>
            <div className="tags">
              {skills.languages.map((lang, idx) => (
                <span className="tag" key={idx}>{lang}</span>
              ))}
            </div>
          </div>

          <div className="skills-box">
            <h3>Frameworks & Libraries</h3>
            <div className="tags">
              {skills.frameworks.map((fw, idx) => (
                <span className="tag" key={idx}>{fw}</span>
              ))}
            </div>
          </div>

          <div className="skills-box">
            <h3>Tools & Methods</h3>
            <div className="tags">
              {skills.tools.map((tool, idx) => (
                <span className="tag" key={idx}>{tool}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="language-levels">
          {languages.map((lang, idx) => (
            <span className="tag" key={idx}>
              {lang.name} <span className="level">({lang.level})</span>
            </span>
          ))}
        </div>
      </section>

      <section className="edu-exp-section">
        <h2>Education</h2>
        {education.map((edu, idx) => (
          <div key={idx} className="edu-block">
            <h3>{edu.school}</h3>
            <p className="degree">{edu.degree}</p>
            <p className="period">{edu.period}</p>
          </div>
        ))}

        <h2>Experience</h2>
        {experience.map((exp, idx) => (
          <div key={idx} className="exp-block">
            <h3>{exp.position}</h3>
            <p className="company">{exp.company}</p>
            <p className="period">{exp.period}</p>
            <ul className="responsibilities">
              {exp.responsibilities.map((task, tIdx) => (
                <li key={tIdx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
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

export default About;
