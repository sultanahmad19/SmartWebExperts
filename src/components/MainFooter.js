import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainFooter.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import gamingTournament from '../assets/images/resource/project-2.png';
import multiplayerGames from '../assets/images/resource/project-thumb-1.webp';
import gamingLegend from '../assets/images/resource/project-thumb-11.png';

const MainFooter = () => {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/info@smartwebexperts.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email,
          _subject: 'New Newsletter Subscription',
          _template: 'basic',
          _captcha: 'false'
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setNewsletterStatus('success');
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setNewsletterStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="main-footer">
      {/* Newsletter Bar */}
      <div className="newsletter-bar">
        <div className="newsletter-content">
          <div className="newsletter-icon">
            <FaEnvelope />
          </div>
          <div className="newsletter-text">
            Subscribe to our newsletter for updates and insights
          </div>
        </div>
        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
          <input 
            type="email" 
            name="email"
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="basic" />
          <input type="hidden" name="_subject" value="New Newsletter Subscription" />
          
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
          
          {newsletterStatus === 'success' && (
            <div className="newsletter-success">
              Thank you for subscribing!
            </div>
          )}
          
          {newsletterStatus === 'error' && (
            <div className="newsletter-error">
              Subscription failed. Please try again.
            </div>
          )}
        </form>
      </div>

      {/* Footer Columns */}
      <div className="footer-columns">
        {/* Company Info */}
        <div className="footer-col">
          <Link to="/" className="footer-brand-link" onClick={() => window.scrollTo(0, 0)}>
            <div className="footer-title">SmartWebExperts</div>
            <div className="footer-desc">
              SmartWeb Experts is a leading web design and development company, 
              specializing in creating stunning, responsive websites that drive business growth.
            </div>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="footer-col pages">
          <div className="footer-title">Quick Links</div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services-list">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="/sitemap.html">Site Map</a></li>
          </ul>
        </div>

        {/* Portfolio */}
        <div className="footer-col">
          <div className="footer-title">Portfolio</div>
          <div className="portfolio-thumbs">
            <Link to="/projects" className="portfolio-link" onClick={() => window.scrollTo(0, 0)}>
              <img src={gamingTournament} alt="Gaming Tournament Website" />
            </Link>
            <Link to="/projects" className="portfolio-link" onClick={() => window.scrollTo(0, 0)}>
              <img src={multiplayerGames} alt="Multiplayer Games Website" />
            </Link>
            <Link to="/projects" className="portfolio-link" onClick={() => window.scrollTo(0, 0)}>
              <img src={gamingLegend} alt="Gaming Legend Website" />
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <div className="footer-title">Contact Info</div>
          <div className="footer-contact-item">
            <FaPhone />
            <a href="tel:+15852018866">+1 (585) 201-8866</a>
          </div>
          <div className="footer-contact-item">
            <FaEnvelope />
            <a href="mailto:info@smartwebexperts.com">info@smartwebexperts.com</a>
          </div>
          <div className="footer-contact-item">
            <FaMapMarkerAlt />
            <span>418 Broadway, STE n, Albany, NY 12207</span>
          </div>
          
          {/* Social Links */}
          <div className="footer-socials">
            <a href="https://www.facebook.com/smartwebexpertsofficial/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
           
            <a href="https://www.linkedin.com/company/smart-web-experts" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/smartwebexperts/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 SmartWeb Experts. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default MainFooter;