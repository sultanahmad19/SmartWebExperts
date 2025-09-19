import React, { useRef, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../styles/ServicesSection.css";
import { FaLongArrowAltRight, FaPalette, FaLaptopCode, FaShoppingCart, FaServer, FaMobileAlt, FaChartLine, FaShareAlt, FaCode, FaPenFancy, FaSearch, FaVideo, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const services = [
  {
    icon: <FaPalette className="icon" />,
    title: "Logo & Branding Design",
    link: "/service-details?service=logo-design",
    text: "Custom logo concepts, strategic color/typography, usage guidelines, and full-rights asset delivery. Logo packages from $88 with clear inclusions.",
  },
  {
    icon: <FaLaptopCode className="icon" />,
    title: "Website Design & Development",
    link: "/service-details?service=web-designing",
    text: "Get a responsive 5–8 page website with basic SEO and admin panel. Upgrade to Elite 15-page dynamic build with advanced features. Built for speed, mobile-first, and conversion-focused.",
  },
  {
    icon: <FaShoppingCart className="icon" />,
    title: "E-commerce Development",
    link: "/service-details?service=e-commerce",
    text: "Shopify or WooCommerce setup with secure checkout and payment gateways. Product pages optimized for conversions, with inventory and shipping tools. Marketplace integrations and automation options.",
  },
  {
    icon: <FaSearch className="icon" />,
    title: "Search Engine Optimization (SEO)",
    link: "/service-details?service=seo",
    text: "On-page SEO: titles, meta descriptions, headings, URLs, internal links, image alt text. Technical SEO: speed fixes, sitemaps, indexing, and site health improvements. Monthly performance tracking.",
  },
  {
    icon: <FaShareAlt className="icon" />,
    title: "Social Media Marketing",
    link: "/service-details?service=social-media-marketing",
    text: "Launch on 2 platforms with 3 posts per week. Page optimization, branded content creation, and community management. Targeted ad campaigns and retargeting to turn followers into customers.",
  },
  {
    icon: <FaVideo className="icon" />,
    title: "2D & 3D Animation",
    link: "/service-details?service=animations",
    text: "Explainers, product showcases, and social clips with full production (script, VO, SFX, music), delivered for web, ads, and social media platforms.",
  },
  {
    icon: <FaMobileAlt className="icon" />,
    title: "Mobile App Development",
    link: "/service-details?service=app-development",
    text: "iOS and Android apps—native or cross-platform—built for speed and usability. API and third-party integrations with secure data flows. Full-cycle development and post-launch support.",
  },
  {
    icon: <FaPenFancy className="icon" />,
    title: "Content Writing",
    link: "/service-details?service=web-content-writing",
    text: "SEO-optimized website copy, landing pages, and product descriptions. Blog posts and articles designed to rank and educate. Brand voice development and on-page SEO alignment.",
  },
];

const ServicesSection = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="services-section pt-0" id="services">
      <div className="auto-container">
        <div className="sec-title text-center" data-aos="fade-down">
          <span className="sub-title">Our Services</span>
          <h2>Complete Digital Solutions <br /> for Your Business Growth</h2>
          <p className="service-description">At Smart Web Experts, we provide complete, package-based digital services—so you always know what's included, what it costs, and how it grows with you. From website design and eCommerce to SEO, social media, branding, animations, and app development, every deliverable is clear and results-driven.</p>
        </div>
        <div className="services-wrapper">
          <button className="nav-arrow nav-arrow-left" onClick={scrollLeft} data-aos="fade-right">
            <FaChevronLeft />
          </button>
          <div className="services-container" ref={scrollContainerRef}>
            {services.map((service, idx) => (
              <div className="service-block" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="inner-box">
                  <div className="icon-box">{service.icon}</div>
                  <h5 className="title">
                    <a href={service.link}>{service.title}</a>
                  </h5>
                  <div className="text">{service.text}</div>
                  <a href={service.link} className="read-more">
                    <FaLongArrowAltRight style={{ marginRight: 8 }} /> Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button className="nav-arrow nav-arrow-right" onClick={scrollRight} data-aos="fade-left">
            <FaChevronRight />
          </button>
        </div>
        <div className="bottom-box">
          <div className="text">
            Trust the experts for all your <strong>digital transformation</strong> needs.
          </div>
          <a href="/service-details" className="theme-btn btn-style-one">
            <span className="btn-title">View All Packages</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;