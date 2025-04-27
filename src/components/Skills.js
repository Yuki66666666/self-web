import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'C', gradient: 'gradient-1' },
    { name: 'C++', gradient: 'gradient-2' },
    { name: 'Python', gradient: 'gradient-3' },
    { name: 'Machine Learning', gradient: 'gradient-4' },
    { name: 'Qt', gradient: 'gradient-5' },
    { name: 'Git', gradient: 'gradient-6' },
    { name: 'Gitlab', gradient: 'gradient-7' },
    { name: 'Business Plan', gradient: 'gradient-8' },
    { name: 'Proposal & Presentation', gradient: 'gradient-9' },
    { name: 'Canva', gradient: 'gradient-10' }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className={`skill-circle ${skill.gradient}`} key={index}>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills; 