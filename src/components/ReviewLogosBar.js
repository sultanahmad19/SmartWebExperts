import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ReviewLogosBar.css';
import clutch from '../assets/images/clutch.png';
import walmart from '../assets/images/walmart.png';
import spotify from '../assets/images/spotify.png';
import google from '../assets/images/google.png';
import trustpilot from '../assets/images/trustpilot.png';

const logos = [
  {
    src: clutch,
    name: 'Clutch',
    bg: 'rgb(25 22 22 / 97%)',
    url: 'https://clutch.co'
  },
  {
    src: walmart,
    name: 'Walmart',
    bg: '#ffffff',
    url: 'https://walmart.com'
  },
  {
    src: spotify,
    name: 'Spotify',
    bg: '#ffffff',
    url: 'https://spotify.com'
  },
  {
    src: google,
    name: 'Google',
    bg: '#ffffff',
    url: 'https://google.com'
  },
  {
    src: trustpilot,
    name: 'Trustpilot',
    bg: 'rgb(25 22 22 / 97%)',
    url: 'https://trustpilot.com'
  }
];

const ReviewLogosBar = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <section className="review-logos-section">
      <div className="container">
        <div className="section-header" data-aos="fade-down">
          <h3>Trusted by Industry Leaders</h3>
          <p>We're proud to work with these amazing companies</p>
        </div>

        <div className="logos-showcase" data-aos="fade-up">
          <div className="logos-grid">
            {logos.map((logo, idx) => (
              <div className="logo-item" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <a
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-link"
                  title={`Visit ${logo.name}'s website`}
                >
                  <div
                    className="logo-container"
                    style={{ backgroundColor: logo.bg }}
                  >
                    <img src={logo.src} alt={logo.name} />
                  </div>
                  <span className="company-name">{logo.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewLogosBar;