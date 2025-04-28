import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToElement = (elementId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBlogClick = (e) => {
    e.preventDefault();
    navigate('/blog');
  };

  useEffect(() => {
    // Handle hash navigation when URL changes or on page load
    if (location.pathname === '/' && location.hash) {
      const elementId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <header>
      <nav>
        <div className="logo">
          <h3>Eric Yu</h3>
        </div>
        <div className="nav-links">
          <Link to="/" onClick={() => handleScrollToElement('home')}>Home</Link>
          <Link to="/" onClick={() => handleScrollToElement('about')}>About</Link>
          <Link to="/" onClick={() => handleScrollToElement('education')}>Education</Link>
          <Link to="/" onClick={() => handleScrollToElement('experience')}>Experience</Link>
          <Link to="/blog" onClick={handleBlogClick}>Blog</Link>
          <Link to="/" onClick={() => handleScrollToElement('contact')} className="book-button">Contact Me</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header; 