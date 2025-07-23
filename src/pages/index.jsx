import React from "react";
import projects from "../data/projects";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faGraduationCap, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export default function Home() {

  return (
    <div className="responsive-container">
      <div className="navbar-box">
        <span>BASANT JARADAT PORTFOLIO</span>
        <div className="menu">
          <a href="/">HOME</a>
          <Link href="/about">ABOUT ME</Link>   
          <Link href="/contact">CONTACT</Link>
        </div>
        <a className="download" href="/basant-jaradat-CV.pdf" download>
            Download CV
        </a>
      </div>

      <div className="container">
        <div className="hi-card">
          <h1>
            Hi, I'm Basant<br /> Taher Jaradat 👋
          </h1>
          <br />
          <h4>Front End Engineer</h4>
        </div>

        <div className="profile-card">
          <img src="/images/profile.png" className="profile-img" alt="Profile" />
        </div>

        <div className="skills-card">
          <div className="skills-header">
            <h4>Skills</h4>
            <div className="skills-icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
          <ul className="skills-list">
            <li style={{ color: "green" }}>Teamwork</li>
            <li style={{ color: "red" }}>Leadership</li>
            <li style={{ color: "#f57c00" }}>Communication</li>
            <li style={{ color: "blue" }}> Time Management</li>
            <li style={{ color: "purple" }}>Problem Solving</li>
            <li style={{ color: "brown" }}>Continuous Learning</li>
          </ul>
        </div>
        <div className="exp-card">
          <span className="bag-icon">
            <i className="fas fa-shopping-bag"><FontAwesomeIcon icon={faShoppingBag} /></i>
          </span>
          <h4>Experience</h4>
          <br />
          <br />
          <h1>
            <strong>Aqlama Company</strong>
          </h1>
          <br />
          <h3>Remote</h3>
          <h4>Apr 2025 – July 2025</h4>
        </div>

        <div className="ed-card">
          <span className="bag-icon">
            <i className="fas fa-graduation-cap"><FontAwesomeIcon icon={faGraduationCap} /> </i>
          </span>
          <h4>Education</h4>
          <br />
          <br />
          <h1>
            <strong>Arab American University</strong>
          </h1>
          <h3>Computer Systems Engineering</h3>
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

