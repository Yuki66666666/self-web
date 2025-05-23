import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollToElement = (elementId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleBlogClick = (e) => {
    e.preventDefault();
    navigate('/blog');
    setMobileMenuOpen(false);
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <h3>Eric Yu</h3>
        </div>
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => handleScrollToElement('home')}>Home</Link>
          <Link to="/" onClick={() => handleScrollToElement('about')}>About</Link>
          <Link to="/" onClick={() => handleScrollToElement('education')}>Education</Link>
          <Link to="/" onClick={() => handleScrollToElement('experience')}>Experience</Link>
          <Link to="/blog" onClick={handleBlogClick} className={['/', '/blog'].includes(location.pathname) ? 'book-button' : ''}>Blog</Link>
          <Link to="/" onClick={() => handleScrollToElement('contact')}>Contact Me</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header; 