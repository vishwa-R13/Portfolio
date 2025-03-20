import "./Home.css";

const HomePage = () => {
  return (
    <section className="home-container">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p className="sub-heading">Your Gateway to a Seamless Experience</p>
        <p className="description">
          I’m a <strong className="highlight">Learner</strong> passionate about
          building innovative and user-friendly solutions. Explore my work, 
          skills, and journey in the world of development.
        </p>
        <button className="download-btn" onClick={() => alert("Downloading CV...")}>
          Download CV
        </button>
      </div>
    </section>
  );
};

export default HomePage;
