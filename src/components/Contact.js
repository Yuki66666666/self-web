import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>Feel free to reach out for collaborations, opportunities, or just to say hi!</p>
          <div className="contact-links">
            <a href="mailto:eric@cornerstonevc.tw" className="contact-link">
              <i className="fas fa-envelope"></i> eric@cornerstonevc.tw
            </a>
            <a href="https://www.linkedin.com/in/%E6%A3%8B%E7%BF%94-%E6%B8%B8-a22908273/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 