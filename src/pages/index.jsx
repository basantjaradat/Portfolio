import React from "react";
import projects from "../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="card-grid">
          <div className="hi-card">
            <h1>
              Hi, I'm Basant<br /> Taher Jaradat 👋
            </h1>
            <h4>Front End Engineer</h4>
          </div>

          <div className="profile-card">
            <img src="/images/profile.png" className="profile-img" alt="Profile" />
          </div>

          <div className="skills-card">
            <span className="skills-icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <h4>Skills</h4>
            <ul className="skills-list">
              <li style={{ color: "green" }}>Teamwork</li>
              <li style={{ color: "red" }}>Leadership</li>
              <li style={{ color: "#f57c00" }}>Communication</li>
              <li style={{ color: "blue" }}>Time Management</li>
              <li style={{ color: "purple" }}>Problem Solving</li>
              <li style={{ color: "brown" }}>Continuous Learning</li>
            </ul>
          </div>

          <div className="exp-card">
            <span className="bag-icon">
              <FontAwesomeIcon icon={faShoppingBag} />
            </span>
            <h4>Experience</h4>
            <br />
            <h1><strong>Aqlama Company</strong></h1>
            <br />
            <h3>Remote</h3>
            <h4>Apr 2025 – July 2025</h4>
          </div>

          <div className="ed-card">
            <span className="bag-icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </span>
            <h4>Education</h4>
            <br />
            <h1><strong>Arab American University</strong></h1>
            <h3>Computer Systems Engineering</h3>
          </div>
        </div>
      </div>

      <div className="search-box">
        🔍
        <h1>Basant Jaradat</h1>
      </div>

      <div className="project-section">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-buttons">
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn demo">Live Demo</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn code">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
