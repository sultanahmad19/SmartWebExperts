import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './FAQSection.css';
import faqImg from '../assets/images/resource/faq.jpg';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const faqs = [
  {
    question: "What does \"full-service\" mean at Smart Web Experts?",
    answer: "Full-service means one partner for website design and development, eCommerce (Shopify/WooCommerce), SEO, social media marketing, branding, 2D/3D animation, app development, and content—so strategy, messaging, and reporting stay consistent across channels."
  },
  {
    question: "How do your packages work?",
    answer: "Each service has \"from $\" pricing with clear inclusions (what's delivered, timelines, and upgrade options). Example: Website packages start at 5–8 pages with basic SEO; Social Startup includes 2 platforms with 3 posts/week. Need more features? Move up a tier or add custom items."
  },
  {
    question: "How much does a website cost?",
    answer: "Website packages start from $1,988 (5–8 pages, responsive, basic SEO, admin panel). Elite builds start from $2,988 (up to ~15 pages with advanced features). Custom functionality (e.g., bookings, integrations) is quoted after scoping."
  },
  {
    question: "What's included in the Social Startup package?",
    answer: "Social Startup includes 2 platforms (e.g., Facebook + Instagram), 3 posts per week, page optimization, branded content, and community management. Reporting shows what grew and the next steps."
  },
  {
    question: "What's included in eCommerce setup?",
    answer: "End-to-end Shopify or WooCommerce setup: secure checkout, payment gateways, product pages optimized for conversions, shipping and inventory tools, and optional marketplace integrations. Pricing is scoped based on catalog size and features."
  },
  {
    question: "How long does SEO take to show results?",
    answer: "Foundational improvements can start helping within weeks; broader organic growth typically builds over 3–6 months. We provide monthly reports with what changed, what improved, and recommended next actions."
  },
  {
    question: "Do you work with my industry?",
    answer: "Yes. We support eCommerce, SaaS, home services, education, and more. Packages are flexible—start with what fits today and upgrade as goals grow."
  },
  {
    question: "Do you use templates for websites?",
    answer: "No. Builds are custom and conversion-focused, with mobile speed, clean structure, and SEO best practices by default."
  },
  {
    question: "Can you manage my content too?",
    answer: "Yes. We offer content writing packages for SEO-optimized website copy, landing pages, product descriptions, and blogs, aligned to your brand voice and keywords."
  },
  {
    question: "How do we get started?",
    answer: "Choose a package or request a custom plan. We'll confirm scope, timeline, and deliverables, then kick off with a clear checklist and first milestone date."
  }
];

const AnimatedPieGraph = ({ value, label, color = '#ff3838', duration = 2000, trigger }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const animationRef = useRef();

  useEffect(() => {
    if (!trigger) {
      setAnimatedValue(0);
      return;
    }
    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setAnimatedValue(Math.floor(progress * value));
      if (progress < 1) animationRef.current = requestAnimationFrame(animate);
      else setAnimatedValue(value);
    };
    animate();
    return () => animationRef.current && cancelAnimationFrame(animationRef.current);
  }, [trigger, value, duration]);

  return (
    <div className="pie-graph">
      <div className="graph-outer" style={{ width: 125, height: 125 }}>
        <CircularProgressbar
          value={animatedValue}
          text={`${animatedValue}%`}
          strokeWidth={12}
          styles={buildStyles({
            pathColor: color,
            trailColor: '#f9f9f9',
            textColor: color,
            textSize: '1.3em',
            strokeLinecap: 'butt'
          })}
        />
      </div>
      <h6 className="title">{label}</h6>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [inView, setInView] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const pieRef = useRef();
  
  const itemsPerPage = 3;
  const totalPages = Math.ceil(faqs.length / itemsPerPage);
  
  const currentFaqs = faqs.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (pieRef.current) observer.observe(pieRef.current);
    return () => {
      if (pieRef.current) observer.unobserve(pieRef.current);
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      setOpenIndex(null); // Reset open FAQ when changing pages
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setOpenIndex(null); // Reset open FAQ when changing pages
    }
  };

  return (
    <section className="faqs-section">
      <div className="faq-container">
        <div className="faq-header" data-aos="fade-down">
          <span className="faq-subtitle">// You've have Any Questions?</span>
          <h2 className="faq-title">Frequently asked questions</h2>
        </div>
        <div className="faq-content-row">
          {/* Left: Accordion */}
          <div className="faq-accordion-col" data-aos="fade-right">
            {currentFaqs.map((faq, idx) => (
              <div
                className={`faq-card${openIndex === idx ? ' active' : ''}`}
                key={currentPage * itemsPerPage + idx}
                onClick={() => toggleFAQ(idx)}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="faq-question">
                  <span>{currentPage * itemsPerPage + idx + 1}. {faq.question}</span>
                  <div className="faq-icon">
                    <span className="icon-line"></span>
                    <span className="icon-line"></span>
                  </div>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
            
            {/* FAQ Navigation */}
            <div className="faq-navigation">
              <button 
                className={`faq-nav-btn prev-btn ${currentPage === 0 ? 'disabled' : ''}`}
                onClick={prevPage}
                disabled={currentPage === 0}
              >
                ← Previous
              </button>
              <span className="faq-page-info">
                {currentPage + 1} of {totalPages}
              </span>
              <button 
                className={`faq-nav-btn next-btn ${currentPage === totalPages - 1 ? 'disabled' : ''}`}
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
              >
                Next →
              </button>
            </div>
          </div>
          
          {/* Right: Image and Stats */}
          <div className="faq-image-col" data-aos="fade-left">
            <div className="faq-image-wrapper">
              <img src={faqImg} alt="FAQ" />
            </div>
            <div className="stats-row" ref={pieRef}>
              <AnimatedPieGraph value={95} label="Client Satisfaction" color="#ff3838" trigger={inView} />
              <AnimatedPieGraph value={100} label="Project Success" color="#ff6b35" trigger={inView} />
              <AnimatedPieGraph value={100} label="On-Time Delivery" color="#ff9f43" trigger={inView} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 