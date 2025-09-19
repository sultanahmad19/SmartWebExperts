import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './WhyChooseUsSection.css';
import benefit1 from '../assets/images/resource/benefit-1.jpg';
import benefit2 from '../assets/images/resource/benefit-2.jpg';
import mainLogo from '../assets/images/logo.png';
import shape1 from '../assets/images/icons/shape-1.png';

const WhyChooseUsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false, 
    });
  }, []);

  return (
    <section className="why-choose-us" id="why-choose-us">
      {/* Main Container with Background Image */}
      <div 
        className="main-container"
        style={{ backgroundImage: `url(${shape1})` }}
      >
        <div className="auto-container">
          {/* Centered Heading */}
          <div className="section-header" data-aos="fade-down">
            <span className="sub-title">Why Choose Us</span>
            <h2>Your Partner for Digital Success</h2>
            <p className="section-description">
              At Smart Web Experts, we're more than just a web design agency.
              We're strategic partners committed to your business growth and digital success.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="content-row">
            {/* Left Column - Text Content */}
            <div className="text-column" data-aos="fade-right">
              <div className="text-content">
                <h3>Why Smart Web Experts?</h3>
                <p>
                  We combine creativity with technical expertise to deliver websites and applications 
                  that are not only visually stunning but also highly functional and user-friendly.
                </p>
                
                <div className="features-list">
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Expertise & Experience</h4>
                      <p>Our team brings years of industry experience and technical expertise to every project.</p>
                    </div>
                  </div>
                  
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Custom Solutions</h4>
                      <p>We create tailored digital solutions that address your unique business challenges.</p>
                    </div>
                  </div>
                  
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>Client-Focused Approach</h4>
                      <p>We prioritize your goals and maintain clear communication throughout the project.</p>
                    </div>
                  </div>
                </div>

                <div className="cta-button">
                  <Link to="/contact" className="theme-btn">
                    Get Started Today
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Two Images with Logo in Middle */}
            <div className="images-column" data-aos="fade-left">
              <div className="images-container">
                {/* Top Image */}
                <div className="image-wrapper top-image">
                  <img src={benefit1} alt="Team Collaboration" />
                </div>
                
                {/* Center Logo */}
                <div className="center-logo">
                  <img src={mainLogo} alt="Smart Web Experts Logo" />
                </div>
                
                {/* Bottom Image */}
                <div className="image-wrapper bottom-image">
                  <img src={benefit2} alt="Digital Solutions" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
