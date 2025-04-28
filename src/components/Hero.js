import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Engineering Background,<br/>Business Vision</h1>
        <p className="hero-tagline">Bridging technology and business to build innovative solutions</p>
        <div className="hero-buttons">
          <a href="#experience" className="hero-button primary">Experience</a>
          <Link to="/blog" className="hero-button secondary">My Blog</Link>
        </div>
      </div>
      <div className="profile-image">
        <img src="/images/profile.jpg" alt="Eric Yu" />
        <div className="profile-box"></div>
      </div>
    </section>
  );
}

export default Hero; 