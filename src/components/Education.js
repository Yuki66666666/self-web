import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="section-content">
        <div className="content-item">
          <h3>National Yang Ming Chiao Tung University</h3>
          <p className="location">Hsinchu, Taiwan</p>
          <p>Electrical and Computer Engineering (Senior)</p>
          <p className="date">Expected May 2025</p>
          <ul>
            <li>2021 freshman representative of NYCU (only pick one in NYCU's freshman each year)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education; 