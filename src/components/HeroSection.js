import React, { useState, useEffect } from 'react';
import Button from './Button';
import '../styles/HeroSection.css';
import herobg from '../assets/images/herobg.jpeg';

const HeroSection = ({
  heading = (
    <>
      Smart Web Design <span className="style-font color2">&amp;</span> <br />Development <br />Solutions
    </>
  ),
  subheading = 'We create stunning websites and digital experiences that help your business grow',
  buttons,
  breadcrumbs = [],
  isHomePage = false, 
  useVideoBackground = true, 
  customVideoSrc = null, 
  videoSrc, 
  shouldLoop = false, 
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const services = [
    'Web Development',
    'Social Media Marketing',
    'SEO Optimization',
    'UI/UX Design',
    'E-commerce Solutions',
    'And Much More'
  ];

  // Default buttons configuration
  const defaultButtons = [
    { label: 'Our Services', href: '#services', variant: 'style-one' },
    { label: 'Get in Touch', href: isHomePage ? '#contact' : '/contact', variant: 'style-two' },
  ];

  // Use provided buttons or default buttons.
  const finalButtons = buttons || defaultButtons;

  useEffect(() => {
    // Only run animation if it's the home page.
    if (!isHomePage) return;

    const currentService = services[currentIndex];
    
    if (!isDeleting) {
      // Typing effect.
      if (currentText.length < currentService.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentService.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait then start deleting.
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect.
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next service.
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
      }
    }
  }, [currentText, currentIndex, isDeleting, services, isHomePage]);

  // Handle smooth scrolling for home page buttons.
  const handleButtonClick = (href, e) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  // Determine which video to use.
  const finalVideoSource = videoSrc || customVideoSrc || herobg;

  return (
    <section className="main-hero-video">
      {/* Background - Video or Image based on prop. */}
      {useVideoBackground && finalVideoSource && finalVideoSource.endsWith('.mp4') ? (
        <video className="hero-bg-video" autoPlay muted playsInline { ...(shouldLoop ? { loop: true } : {}) }>
          <source src={finalVideoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div 
          className="hero-bg-image"
          style={{ backgroundImage: `url(${herobg})` }}
        ></div>
      )}
      
      {/* Blur Overlay for Text Readability */}
      <div className="hero-blur-overlay"></div>
      
      <div className="hero-content">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="hero-breadcrumbs">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <span className="breadcrumb-item">{crumb}</span>
                {index < breadcrumbs.length - 1 && <span className="breadcrumb-separator"> &gt; </span>}
              </React.Fragment>
            ))}
          </div>
        )}
        <h1>
          {isHomePage ? (
            <>
              At SmartWebExperts <br />
              we do{' '}
              <span className="animated-text">
                <span className="typing-text">{currentText}</span>
                <span className="typing-cursor">|</span>
              </span>
            </>
          ) : (
            heading
          )}
        </h1>
        <p className="hero-subtitle">{subheading}</p>
        <div className="hero-buttons">
          {finalButtons.map((btn, idx) => (
            <Button
              key={idx}
              href={btn.href}
              variant={btn.variant}
              size={btn.size}
              icon={btn.icon}
              iconPosition={btn.iconPosition}
              pulse={btn.pulse}
              rounded={btn.rounded}
              light={btn.light}
              hvrLight={btn.hvrLight}
              className={btn.className}
              onClick={(e) => handleButtonClick(btn.href, e)}
            >
              {btn.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;