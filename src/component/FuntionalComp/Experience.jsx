import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-container">
      <h1 className="sub-title">Experience</h1>
      <div className="experience-list">
        <div className="experience-item">
          <h3>CodSoft Internship</h3>
          <p className="role">Machine Learning Intern</p>
          <p>Developed and implemented ML models for data analysis.</p>
        </div>

        <div className="experience-item">
          <h3>Cognorise Internship</h3>
          <p className="role">Machine Learning Intern</p>
          <p>Completed training and received an offer letter for ML projects.</p>
        </div>

        <div className="experience-item">
          <h3>Hackathons & Projects</h3>
          <p>Participated in a hackathon, presenting feasibility & viability analysis.</p>
          <p>Working on a <strong>math-learning game for children</strong> as a fun, interactive project.</p>
        </div>

        <div className="experience-item">
          <h3>LeetCode 100-Day Challenge</h3>
          <p>Consistently solving problems, posting solutions on LinkedIn.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
