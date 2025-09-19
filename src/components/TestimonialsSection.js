import React from 'react';
import '../styles/TestimonialsSection.css';

const testimonials = [
  {
    name: 'John D.',
    photo: 'https://via.placeholder.com/60x60?text=JD',
    review: 'SmartWeb Experts delivered our project on time and exceeded our expectations. Highly recommended!'
  },
  {
    name: 'Sarah K.',
    photo: 'https://via.placeholder.com/60x60?text=SK',
    review: 'The team was professional, creative, and responsive throughout the process.'
  },
  {
    name: 'Alex P.',
    photo: 'https://via.placeholder.com/60x60?text=AP',
    review: 'We saw a huge improvement in our online presence thanks to their web design and SEO services.'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2>What they’re talking about us</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <div className="testimonial-card" key={idx}>
            <img src={t.photo} alt={t.name} className="testimonial-photo" />
            <div className="testimonial-review">{t.review}</div>
            <div className="testimonial-name">{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection; 