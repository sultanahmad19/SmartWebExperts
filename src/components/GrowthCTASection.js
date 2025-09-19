import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaCheckCircle, FaPhone, FaArrowRight, FaStar, FaUsers, FaChartLine } from 'react-icons/fa';
import '../styles/GrowthCTASection.css';

const GrowthCTASection = () => {
  return (
    <section className="growth-cta-section">
      <div className="cta-container">
        {/* Main Header */}
        <div className="cta-main-header" data-aos="fade-down">
          <h2>Ready to Grow Your Business?</h2>
          <p className="cta-main-subtitle">Let's Make It Happen.</p>
          <div className="cta-description">
            Smart Web Experts delivers clear, package-based solutions that launch fast and scale as you grow. 
            Pick a starting plan or request a custom roadmap—either way, you'll know exactly what's included, 
            when it ships, and how success is measured.
          </div>
        </div>

        {/* Process Timeline */}
        <div className="process-timeline" data-aos="fade-up">
          <h3>What happens next</h3>
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaCheckCircle />
              </div>
              <div className="timeline-content">
                <h4>Choose Your Path</h4>
                <p>Select a package or request a custom plan tailored to your needs</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaUsers />
              </div>
              <div className="timeline-content">
                <h4>We Confirm Everything</h4>
                <p>We'll confirm scope, timeline, and deliverables in detail</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaRocket />
              </div>
              <div className="timeline-content">
                <h4>Fast Launch</h4>
                <p>Get a quick launch with plain-language progress updates</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-action-section" data-aos="fade-up">
          <div className="primary-cta-wrapper">
            <Link to="/contact" className="cta-button primary">
              <span>Get Your Free Custom Growth Plan</span>
              <FaArrowRight className="arrow-icon" />
            </Link>
          </div>
          
          <div className="secondary-actions">
            <Link to="/service-details" className="cta-button secondary">
              Browse Packages
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Support Section */}
        <div className="support-section" data-aos="fade-up">
          <div className="support-content">
            <FaPhone className="phone-icon" />
            <div className="support-text">
              <span>Prefer a quick call?</span>
              <a href="tel:+15852018866" className="phone-link">+1 (585) 201-8866</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthCTASection;
