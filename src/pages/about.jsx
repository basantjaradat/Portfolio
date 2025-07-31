import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { profileData } from "../data/profile";

const About = () => {
  const { about, education, experience, skills, languages } = profileData;

  return (
    <div>
      <Navbar />

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
    </div>
  );
};

export default About;
