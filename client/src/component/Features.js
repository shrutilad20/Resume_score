import React from 'react';
import './Features.css'; // Optional: for styling

const Features = () => {
  return (
    <div className="features-page">
      <h1>🚀 Features of ATS Resume Checker</h1>

      <div className="feature-card">
        <h2>📄 Resume Parsing</h2>
        <p>Extracts data like name, education, skills, and experience using smart parsing techniques.</p>
      </div>

      <div className="feature-card">
        <h2>📊 ATS Compatibility Score</h2>
        <p>Rates your resume for ATS friendliness based on formatting, keywords, and readability.</p>
      </div>

      <div className="feature-card">
        <h2>🔍 Keyword Match</h2>
        <p>Compares your resume against the job description to identify missing or weak keywords.</p>
      </div>

      <div className="feature-card">
        <h2>📈 Suggestions for Improvement</h2>
        <p>Gives you actionable suggestions like adding skills, using active voice, or adjusting formats.</p>
      </div>
    </div>
  );
};

export default Features;
