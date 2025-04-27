import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <h3>Eric Yu</h3>
          <p>Engineering Student & Future Business Leader</p>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#blog">Blog</a>
          <a href="#contact" className="book-button">Contact Me</a>
        </div>
      </nav>
    </header>
  );
}

export default Header; 