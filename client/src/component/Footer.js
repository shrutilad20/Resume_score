import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo-circle">ATS</div>
          <p className="brand-text">
            ATS Resume Checker helps students and professionals get past automated resume filters and land more interviews.
          </p>
          <div className="social-icons">
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-x-twitter"></i>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Contact</li>
              <li>Log in</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>Careers</li>
              <li>Partners</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>

        <div className="newsletter">
          <h4>Sign up for updates</h4>
          <p>Get resume tips, product updates, and more!</p>
          <form>
            <input type="email" placeholder="Your Email" />
            <button type="submit">Sign Me Up</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 ATS Resume Checker. Built with ❤️ by Shruti Lad</p>
        <p>India | shruti@example.com</p>
      </div>
    </footer>
  );
};

export default Footer;
