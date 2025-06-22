// src/component/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">📄 ATS Resume Checker</div>
      <nav className="nav-links">
        <a href="#features">Features</a>
        <a href="#upload">Upload</a>
        <a href="#about">About</a>
        <button className="login-btn">Login / Sign Up</button>
      </nav>
    </header>
  );
}

export default Navbar;
