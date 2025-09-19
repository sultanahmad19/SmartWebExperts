import React from 'react';
import '../styles/NewsletterSignupSection.css';

const NewsletterSignupSection = () => (
  <section className="newsletter-section">
    <div className="newsletter-content">
      <h3>Stay updated with our latest news & offers</h3>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </section>
);

export default NewsletterSignupSection; 