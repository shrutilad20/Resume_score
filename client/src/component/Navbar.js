import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // if exists

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">📄 ATS Resume Checker</Link>
      <div className="nav-links">
        <Link to="/features">Features</Link>
        <Link to="/">Upload</Link>
        <Link to="/about">About</Link> {/* Placeholder for now */}
        <button className="login-btn">Login / Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
