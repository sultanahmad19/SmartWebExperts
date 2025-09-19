import React from 'react';
import '../styles/MoreThanAgencySection.css';

const MoreThanAgencySection = () => {
  return (
    <section className="more-than-agency-section">
      <div className="agency-images">
        {/* Replace with your own images if desired */}
        <img src="https://via.placeholder.com/300x200?text=Agency+1" alt="Agency 1" className="agency-img main" />
        <img src="https://via.placeholder.com/180x120?text=Agency+2" alt="Agency 2" className="agency-img sub" />
      </div>
      <div className="agency-content">
        <h2>We’re more than an agency</h2>
        <p>
          We go beyond just delivering projects. Our team partners with you to understand your business, your goals, and your challenges, ensuring every solution is tailored for your success.
        </p>
        <a href="#contact" className="agency-btn">Learn More</a>
      </div>
    </section>
  );
};

export default MoreThanAgencySection; 