import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/ContactSection.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-left" data-aos="fade-right">
          <div className="contact-header" data-aos="fade-down">
            <span className="section-subtitle">Need any help?</span>
            <h2 className="section-title">Get in touch with us</h2>
            <p className="contact-description">
              We're here to help with your web, app, and digital needs. Whether you have a project inquiry, 
              need support, or want to explore partnership opportunities, we're ready to assist you.
            </p>
          </div>
          
          <div className="contact-methods">
            <div className="contact-card" data-aos="fade-up" data-aos-delay={100}>
              <div className="contact-icon phone">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="contact-info">
                <h4>Have any question?</h4>
                <a href="tel:+15852018866">+1 (585) 201-8866</a>
              </div>
            </div>
            
            <div className="contact-card" data-aos="fade-up" data-aos-delay={200}>
              <div className="contact-icon eemail">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-info">
                <h4>Write email</h4>
                <a href="mailto:info@smartwebexperts.com">info@smartwebexperts.com</a>
              </div>
            </div>
            
            <div className="contact-card" data-aos="fade-up" data-aos-delay={300}>
              <div className="contact-icon aaddress">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="contact-info">
                <h4>Visit anytime</h4>
                <p>418 Broadway, STE N, Albany, NY 12207</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-right" data-aos="fade-left">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.1234567890123!2d-73.7483!3d42.6526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0a3cd5f5b5b5%3A0x1234567890abcdef!2s418%20Broadway%2C%20Albany%2C%20NY%2012207!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Smart Web Experts Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;