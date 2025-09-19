import React from 'react';
import './CustomPatternSection.css';

const CustomPatternSection = () => {
  return (
    <section className="custom-pattern-section">
      {/* Left Content */}
      <div className="left-content">
        <div className="center-text">
          <h2>Want to know about <br />our packages</h2>
        </div>
        <a href="/service-details" className="theme-btn btn-style-one light" style={{ marginTop: '2rem' }}>
          <span className="btn-title">Our Packages</span>
        </a>
      </div>
      
      {/* Right Pricing Cards */}
      <div className="pricing-cards">
        {/* Silver Package */}
        <div className="pricing-card silver">
          <div className="card-header">
            <h3>SILVER</h3>
          </div>
          <div className="card-body">
            <ul className="package-features">
              <li>Professional Logo Design (2 Concepts)</li>
              <li>Business Card Design</li>
              <li>Social Media Kit (5 Platforms)</li>
              <li>Basic Website (5 Pages)</li>
              <li>SEO Optimization (Basic)</li>
              <li>Content Writing (1000 Words)</li>
              <li>2 Revisions Included</li>
              <li>Delivery: 7-10 Days</li>
            </ul>
          </div>
          <div className="card-footer">
            <span className="price">$ 1,200</span>
          </div>
        </div>

        {/* Gold Package */}
        <div className="pricing-card gold">
          <div className="card-header">
            <h3>GOLD</h3>
          </div>
          <div className="card-body">
            <ul className="package-features">
              <li>Premium Logo Design (3 Concepts)</li>
              <li>Complete Brand Identity Package</li>
              <li>Social Media Management (Monthly)</li>
              <li>E-commerce Website (10 Pages)</li>
              <li>Advanced SEO & Analytics</li>
              <li>Content Marketing Strategy</li>
              <li>Digital Advertising Campaign</li>
              <li>5 Revisions Included</li>
              <li>Delivery: 15-20 Days</li>
            </ul>
          </div>
          <div className="card-footer">
            <span className="price">$ 2,400</span>
          </div>
        </div>

        {/* Platinum Package */}
        <div className="pricing-card platinum">
          <div className="card-header">
            <h3>PLATINUM</h3>
          </div>
          <div className="card-body">
            <ul className="package-features">
              <li>Luxury Brand Identity System</li>
              <li>Custom Website Development</li>
              <li>Full Digital Marketing Suite</li>
              <li>Social Media Strategy & Content</li>
              <li>PPC & Google Ads Management</li>
              <li>Email Marketing Campaigns</li>
              <li>Analytics & Performance Reports</li>
              <li>Priority Support & Maintenance</li>
              <li>Unlimited Revisions</li>
              <li>Delivery: 25-30 Days</li>
            </ul>
          </div>
          <div className="card-footer">
            <span className="price">$ 4,200</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPatternSection; 