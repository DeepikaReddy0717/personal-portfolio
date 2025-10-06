import React, { useState } from "react";
import "./Certifications.css"; 
import Menu from "./CertificationsMenu"; 

const Certifications = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleCertificate = (id) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <section className="certifications container section" id="certifications">
      <h2 className="section__title">Certifications</h2>

      <ul className="certifications__list">
        {Menu.map(({ id, title, company, certificate }) => {
          const isActive = activeId === id;

          return (
            <li 
              key={id} 
              className={`certifications__item ${isActive ? 'certifications__item--expanded' : ''}`}
            >
              <div className="certifications__info">
                <h3 className="certifications__title">{title}</h3>
                <span className="certifications__company">{company}</span>
              </div>

              <button 
                className="certifications__view-button" 
                onClick={() => toggleCertificate(id)}
                aria-expanded={isActive}
                aria-controls={`certificate-${id}`}
              >
                {isActive ? "Hide Certificate" : "View Certificate"}
              </button>

              {isActive && certificate?.src && (
                <div 
                  id={`certificate-${id}`} 
                  className="certifications__dropdown" 
                  role="region" 
                  aria-label={`${title} Certificate`}
                >
                  <img 
                    src={certificate.src} 
                    alt={`${title} Certificate`} 
                    className="certifications__certificate-image" 
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Certifications;
