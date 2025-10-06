import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="deepu-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Deepikareddy</h2>
        </div>

        <div className="footer-links">
          <a href="https://github.com/DeepikaReddy0717" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/deepikareddymandapati/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="mailto:2300031389@kluniversity.in">
            <i className="fas fa-envelope"></i> Email
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Deepikareddy. Built with 💙 using React.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
