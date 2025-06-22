import React from 'react';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';         // ✅ Add this

import ResumeUploader from './component/ResumeUploader';

function App() {
  const illustrations = [
    "/assets/resume_upload.svg",
    "/assets/career_growth.svg",
    "/assets/team_goals.svg",
    "/assets/document_cloud.svg",
    "/assets/success_check.svg"
  ];
  const randomImage = illustrations[Math.floor(Math.random() * illustrations.length)];

  return (
    <div className="app">
            <Navbar />                                 

     
      <main className="mainContent">
        <section className="upload-section">
          <img src={randomImage} alt="Upload Illustration" className="upload-illustration" />
          <h2 className="upload-title">📝 Upload Your Resume for ATS Analysis</h2>
          <p className="upload-subtitle">Make your resume pass any screening bot 🚀</p>
          
          <div className="resume-card">
            <ResumeUploader />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
