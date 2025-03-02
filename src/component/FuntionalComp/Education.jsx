import "./Education.css"; // Import the CSS file

function Education() {
  return (
    <div className="education-container">
      <h1 className="sub-title">Education</h1>

      <div className="education-content">
        <h2>B.Tech in Artificial Intelligence and Data Science</h2>
        <p><strong>St. Joseph's Institute of Technology</strong></p>
        <p>2022 - 2026</p>
      </div>

      <div className="education-content">
        <h2>Higher Secondary (HSC)</h2>
        <p><strong>S.D.Sion Matricr Higher School</strong></p>
        <p>Year of Completion:2021 - 2022</p>
      </div>

      <div className="education-content">
        <h2>Secondary School (SSLC)</h2>
        <p><strong>S.D.Sion Matricr Higher School</strong></p>
        <p>Year of Completion: 2019 - 2020</p>
      </div>
    </div>
  );
}

export default Education;
