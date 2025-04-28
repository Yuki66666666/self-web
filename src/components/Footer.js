import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Eric Yu</h3>
        </div>
        <div className="footer-links">
          <Link to="/#home">Home</Link>
          <Link to="/#about">About</Link>
          <Link to="/#education">Education</Link>
          <Link to="/#experience">Experience</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/#contact">Contact</Link>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/%E6%A3%8B%E7%BF%94-%E6%B8%B8-a22908273/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:eric@cornerstonevc.tw">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Eric Yu. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 