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

      <Footer />

      <style jsx>{`
        .profile-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .profile-container {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .about-section,
        .edu-exp-section {
          background-color: rgba(255, 255, 255, 0.2);
          padding: 1.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
          border: 2px solid black;
          border-bottom: 6px solid black;
          border-radius: 3rem;
          flex: 1;
          transition: transform 0.3s ease;
        }

        .about-section:hover,
        .edu-exp-section:hover {
          transform: translateY(-5px);
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #111827;
        }

        .about-text {
          color: #4b5563;
          margin-bottom: 2rem;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .skills-box {
          flex: 1 1 30%;
          padding: 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          background-color: rgba(255, 255, 255, 0.2);
        }

        .skills-box h3 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          background-color: #f8deaf;
          color: #e98a00;
          padding: 0.35rem 0.7rem;
          font-size: 0.75rem;
          border-radius: 8px;
          display: inline-block;
        }

        .language-levels {
          margin-top: 1.5rem;
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .level {
          color: #6b7280;
          font-size: 0.75rem;
        }

        .edu-block,
        .exp-block {
          margin-bottom: 2rem;
        }

        .degree,
        .company,
        .period {
          color: #4b5563;
          margin: 0.2rem 0;
        }

        .responsibilities {
          list-style-type: disc;
          margin-left: 1.5rem;
          color: #374151;
        }
      `}</style>
    </div>
  );
};

export default About;
