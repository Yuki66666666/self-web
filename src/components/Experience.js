import React, { useState } from 'react';
import './Experience.css';
import { FaBriefcase, FaLaptopCode, FaMicrochip, FaUserTie, FaAward, FaUniversity, FaUsers, FaChartLine, FaBrain } from 'react-icons/fa';

function Experience() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    description: '',
    details: []
  });

  const workExperience = {
    'vc-analyst': {
      title: 'Analyst (Full-time)',
      company: 'Cornerstone Venture',
      description: 'Working as a full-time analyst at Cornerstone Venture, analyzing startup investment opportunities.',
      details: [
        'Conducted market research and due diligence for potential investments',
        'Analyzed business models and financial projections',
        'Participated in pitch meetings and investment decisions'
      ],
      icon: <FaBriefcase />
    },
    'ai-software-engineer': {
      title: 'AI Robotic Software Engineering Intern',
      company: 'ITRI (HolonOS - Startup Team)',
      period: 'Sep. 2023 – Jun 2024',
      location: 'Hsinchu, Taiwan',
      description: 'In a startup team in ITRI, aiming to finish some industrial work by automation. Mainly in charge of image processing and integrating manufacturing functions like welding into different brand of robotic arm.',
      details: [
        'Entrepreneurship Potential Award by Taiwan\'s Ministry of Economic Affairs – 1st place (awarded 1 million NT dollars)'
      ],
      icon: <FaLaptopCode />
    },
    'memory-fae': {
      title: 'Memory FAE Intern',
      company: 'Samsung Electronics',
      period: 'Jun. 2024 – Aug 2024',
      location: 'Hsinchu, Taiwan',
      description: 'Deal with technical problems from our customers (American server/computer company). As a summer vacation intern, I\'m mainly learning about server and SSD structure, pcie architecture, and technical analysis method.',
      details: [],
      icon: <FaMicrochip />
    }
  };

  const extraCurricularExperience = {
    'yef-representative': {
      title: '2023 YEF Representative',
      company: 'Epoch School Future Entrepreneurs',
      period: 'Jan. 2023 – Jul 2023',
      description: 'In this startup mock competition, I learned about how to develop an idea to business implementation, became one of the nine outstanding participants in YEF (Epoch School Future Entrepreneurs) thus got a free trip to Silicon Valley, visiting a bunch of outstanding enterprises, inclusive of both startup and global-known companies).',
      details: [],
      icon: <FaUserTie />
    },
    'atcc': {
      title: 'ATCC 20th - National Third Place',
      company: 'TSMC',
      period: 'Feb. 2022 – Jul 2022',
      description: 'Helping TSMC build connection between enterprise and college. By holding tea party and Installation art, we promoted femininity and succeed to become the representative team of TSMC, got the third place at last (from over thousands of teams around Taiwan).',
      details: [],
      icon: <FaAward />
    },
    'student-ambassador': {
      title: 'Student Ambassador',
      company: 'NYCU',
      period: 'Sep. 2021 – present',
      description: 'Responsible for receiving guests at NYCU on special occasions.',
      details: [],
      icon: <FaUniversity />
    },
    'student-council': {
      title: 'NYCU Student Council',
      company: 'Department of Welfare',
      period: 'Sep. 2023 – Jan 2023',
      description: 'Holding some events such as meetups and podcasts for the welfare of NYCU students.',
      details: [],
      icon: <FaUsers />
    },
    'industry-analysis': {
      title: 'Industry Analysis Study Group',
      company: 'NYCU',
      period: 'Jan. 2023 – Jul 2023',
      description: 'Learned Enhance industry analysis knowledge and shared my learnings during classes held by investment club.',
      details: [],
      icon: <FaChartLine />
    },
    'ml-project': {
      title: 'Machine Learning Project',
      company: 'Deep Learning Research',
      period: 'Sep. 2023 – Jul 2024',
      description: 'Have a paper (2nd author) about Deep Learning (fine-grained ood), inclusive of a new architecture baseline and present a new dataset.',
      details: [],
      icon: <FaBrain />
    }
  };

  const openModal = (data) => {
    setModalContent(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      
      <h3 className="section-subtitle">Working Experience</h3>
      <div className="content-grid">
        {Object.keys(workExperience).map((key) => (
          <div className="grid-item" key={key} onClick={() => openModal(workExperience[key])}>
            <div className="grid-item-icon">{workExperience[key].icon}</div>
            <div className="grid-item-content">
              <h3>{workExperience[key].title}</h3>
              <p className="company">{workExperience[key].company}</p>
              {workExperience[key].period && <p className="period">{workExperience[key].period}</p>}
            </div>
          </div>
        ))}
      </div>
      
      <h3 className="section-subtitle">Extra Curricular Experience</h3>
      <div className="content-grid">
        {Object.keys(extraCurricularExperience).map((key) => (
          <div className="grid-item" key={key} onClick={() => openModal(extraCurricularExperience[key])}>
            <div className="grid-item-icon">{extraCurricularExperience[key].icon}</div>
            <div className="grid-item-content">
              <h3>{extraCurricularExperience[key].title}</h3>
              <p className="company">{extraCurricularExperience[key].company}</p>
              {extraCurricularExperience[key].period && <p className="period">{extraCurricularExperience[key].period}</p>}
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="modal-body">
              <h2>{modalContent.title}</h2>
              <h3>{modalContent.company}</h3>
              {modalContent.location && <p className="modal-location">{modalContent.location}</p>}
              {modalContent.period && <p className="modal-period">{modalContent.period}</p>}
              <p className="modal-description">{modalContent.description}</p>
              {modalContent.details && modalContent.details.length > 0 && (
                <ul className="modal-details">
                  {modalContent.details.map((detail, index) => (
                    <li key={index}>
                      <span className="detail-icon">•</span> {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Experience; 