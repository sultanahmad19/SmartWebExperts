import React from 'react';
import '../styles/AboutSection.css';
import { FaCheckCircle, FaPhone, FaUsers } from 'react-icons/fa';

const AboutSection = () => (
  <section className="about-section" id="about">
    <div className="auto-container">
      <div className="row about-row">
        {/* Image Column */}
        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
          <div className="inner-column wow fadeInLeft">
            <figure className="image-1 overlay-anim wow fadeInUp">
              <img src={require('../assets/images/about-1.jpg')} alt="About 1" />
            </figure>
            <figure className="image-2 overlay-anim wow fadeInRight">
              <img src={require('../assets/images/about-2.jpg')} alt="About 2" />
            </figure>
            <div className="experience bounce-y">
              <div className="badge-content">
                <FaUsers className="exp-icon" />
                <div className="exp-text">
                  <span className="exp-years">10+</span>
                  <span className="exp-label">Years of<br />experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content Column */}
        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
          <div className="inner-column">
            <div className="sec-title">
              <span className="sub-title">About Smart Web Experts</span>
              <h2>We create digital experiences that drive business growth</h2>
              <div className="text">
                Smart Web Experts is a leading web design and development company specializing in creating custom digital solutions that help businesses succeed online. Our team of experienced designers and developers combines creativity with technical expertise to deliver websites and applications that are not only visually stunning but also highly functional and user-friendly.
              </div>
            </div>
            <ul className="list-style-two">
              <li>
                <FaCheckCircle className="fa fa-check-circle red-icon" />
                <div>
                  <span>User-Centered Design</span>
                  <div className="desc">We create intuitive interfaces focused on user experience and engagement.</div>
                </div>
              </li>
              <li>
                <FaCheckCircle className="fa fa-check-circle red-icon" />
                <div>
                  <span>Custom Development</span>
                  <div className="desc">Tailored solutions built with the latest technologies to meet your specific needs.</div>
                </div>
              </li>
              <li>
                <FaCheckCircle className="fa fa-check-circle red-icon" />
                <div>
                  <span>Results-Driven Approach</span>
                  <div className="desc">We focus on creating websites that convert visitors into customers and drive business growth.</div>
                </div>
              </li>
            </ul>
            <div className="btn-box">
              <a href="tel:+15852018866" className="call-action-btn">
                <FaPhone className="icon" />
                <span>
                  <small>Call Anytime</small>
                  <strong>+1 (585) 201-8866</strong>
                </span>
              </a>
              <a href="#services" className="theme-btn btn-style-one">
                <span className="btn-title">Our Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;