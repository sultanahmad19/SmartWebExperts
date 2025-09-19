import React from 'react';
import '../styles/BestSolutionsSection.css';

const BestSolutionsSection = () => {
  return (
    <section className="best-solutions-section">
      <div className="best-solutions-images">
        {/* Replace the src URLs below with your own images from src/assets/images or public/images */}
        <img src="https://via.placeholder.com/350x250?text=Main+Image" alt="Team working" className="main-img" />
        <img src="https://via.placeholder.com/200x140?text=Sub+Image" alt="Collaboration" className="sub-img" />
      </div>
      <div className="best-solutions-content">
        <h2>We provide the best web design solutions for your business.</h2>
        <p>
          Our team of experienced designers and developers is dedicated to delivering creative and effective web solutions tailored to your business needs.
        </p>
        <ul>
          <li>Unique & modern design</li>
          <li>Responsive & mobile-friendly</li>
          <li>SEO optimized</li>
          <li>Fast & secure</li>
        </ul>
        <a href="#contact" className="cta-btn">Get Free Quote</a>
      </div>
    </section>
  );
};

export default BestSolutionsSection; 