import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from './Button';
import '../styles/CallToActionBanner.css';

const CallToActionBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <section className="cta-banner">
      <div className="cta-banner-content" data-aos="fade-up">
        <h2 data-aos="fade-down" data-aos-delay={200}>Looking for the best web design solutions?</h2>
        <Button href="/contact" variant="style-one" size="large" pulse data-aos="zoom-in" data-aos-delay={400}>
          Get a Free Quote
        </Button>
      </div>
    </section>
  );
};

export default CallToActionBanner; 