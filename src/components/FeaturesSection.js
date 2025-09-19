import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../styles/FeaturesSection.css";
import { FaCheck } from "react-icons/fa";

const features = [
  {
    title: "Proven Expertise",
    desc: "Years of hands-on experience in web design, development, and UX/UI strategy",
  },
  {
    title: "Collaborative Approach",
    desc: "We work closely with you to understand your goals and deliver exactly what you envision.",
  },
  {
    title: "Cutting-Edge Tools",
    desc: "Mastery of modern technologies and design trends to keep your brand ahead of the curve.",
  },
];

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <section className="features-section">
      <div className="auto-container">
        <div className="row features-row">
          {/* Left Column */}
          <div className="content-column col-xl-5 col-lg-6 col-md-12" data-aos="fade-right">
            <div className="inner-column">
              <span className="sub-title">// Welcome to Smart Web Experts</span>
              <h2 className="features-heading">Experienced designers & developers</h2>
              <div className="features-list">
                {features.map((f, idx) => (
                  <div className="feature-block" key={idx} data-aos="fade-up" data-aos-delay={idx * 150}>
                    <div className="feature-icon">
                      <span className="icon-circle"><FaCheck /></span>
                    </div>
                    <div className="feature-content">
                      <div className="feature-title">{f.title}</div>
                      <div className="feature-desc">{f.desc}</div>
                    </div>
                    {idx < features.length - 1 && <div className="feature-divider" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="image-column col-xl-7 col-lg-6 col-md-12 col-sm-12" data-aos="fade-left">
            <div className="inner-column">
              <div className="image-box">
                <img src={require("../assets/images/image-2.jpg")} alt="Team working" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 