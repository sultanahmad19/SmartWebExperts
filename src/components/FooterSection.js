import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-main">
        <Link to="/" className="footer-logo-block" onClick={() => window.scrollTo(0, 0)}>
          <div className="footer-logo">
            {/* Replace with your logo if available */}
            <img src="https://via.placeholder.com/60x60?text=Logo" alt="Logo" />
          </div>
          <div className="footer-company">
            <div className="footer-company-name">SMARTWEB<br />EXPERTS</div>
            <div className="footer-company-desc">Website & applications design agency</div>
          </div>
        </Link>
        <div className="footer-links-block">
          <div className="footer-title">Quick Links</div>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact-block">
          <div className="footer-title">Contact Info</div>
          <div className="footer-contact-item">
            📧 <a href="mailto:info@smartwebexperts.com">info@smartwebexperts.com</a>
          </div>
          <div className="footer-contact-item">📍 418 Broadway, STE n, Albany, NY 12207</div>
          <div className="footer-contact-item">
            📞 <a href="tel:+15852018866">+1 (585) 201-8866</a>
          </div>
          <div className="footer-socials">
            <a href="https://www.facebook.com/smartwebexpertsofficial/" className="footer-social" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/smartwebexperts/" className="footer-social" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/smart-web-experts" className="footer-social" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} SmartWeb Experts. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection; 