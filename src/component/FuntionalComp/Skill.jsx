import React from "react";
import "./Skill.css"; // Import external CSS

const Skill = () => {
  return (
    <section className="skills-container">
      <h1 className="sub-title">Skills</h1>
      <div className="skills-list">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <p>Python, JavaScript, SQL</p>
        </div>
        <div className="skill-category">
          <h3>Machine Learning & AI</h3>
          <p>Scikit-Learn(Basic),Algorithms</p>
        </div>
        <div className="skill-category">
          <h3>Web Development</h3>
          <p>React.js (Learning), HTML, CSS</p>
        </div>
        <div className="skill-category">
          <h3>Database Management</h3>
          <p>PostgreSQL (pgAdmin), MySQL</p>
        </div>
        <div className="skill-category">
          <h3>Problem Solving</h3>
          <p>LeetCode (100-Day Challenge in Progress)</p>
        </div>
        <div className="skill-category">
          <h3>Version Control</h3>
          <p>Git, GitHub</p>
        </div>
        <div className="skill-category">
          <h3>Soft Skills</h3>
          <p>Critical Thinking, Team Collaboration, Presentation Skills</p>
        </div>
      </div>
    </section>
  );
};

export default Skill;
