import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt, FaBars, FaTimes, FaAngleDown, FaClock, FaBolt } from 'react-icons/fa';
import logo from './assets/images/logoo.png';
import logo2 from './assets/images/logoo.png';

const Header = () => {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-visible');
    } else {
      document.body.classList.remove('mobile-menu-visible');
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('mobile-menu-visible');
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const handleServicesMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesOpen(false);
    }, 300); // 300ms delay before hiding
    setDropdownTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesOpen(false);
    }, 300); // 300ms delay before hiding
    setDropdownTimeout(timeout);
  };

  return (
    <>
      <header>
        {/* Top Bar */}
        <div className="header-top">
          <div className="inner-container">
            <div className="top-left">
              <div className="contact-info desktop-only">
                <a href="mailto:info@smartwebexperts.com" className="email">
                  <FaEnvelope /> info@smartwebexperts.com
                </a>
              </div>
              <div className="header-separator"></div>
              <div className="contact-info desktop-only">
                <span className="address">
                  <FaMapMarkerAlt /> 418 Broadway, STE n, Albany, NY 12207
                </span>
              </div>
            </div>
            <div className="top-right">
              <div className="hiring-section desktop-only">
                <FaBolt />
                <span>We are Hiring</span>
              </div>
              <div className="header-separator"></div>
              <div className="header-social-follow">
                <span className="follow-label">Follow</span>
                <div className="social-separator"></div>
                <a href="https://www.linkedin.com/company/smart-web-experts" className="social-icon" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                <div className="social-separator"></div>
                <a href="https://www.facebook.com/smartwebexpertsofficial/" className="social-icon" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <div className="social-separator"></div>
                <a href="https://www.instagram.com/smartwebexperts/" className="social-icon" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
        {/* Main Navbar */}
        <nav className="main-navbar">
          <Link to="/" className="logo-section" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="SmartWeb Experts" className="logo-img" />
            <div className="logo-text">
              <span className="logo-main">SMARTWEB</span>
              <span className="logo-sub">EXPERTS</span>
            </div>
          </Link>
          <ul className="nav-links desktop-only">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
            <li
              className={location.pathname.startsWith('/services') || location.pathname.startsWith('/service-details') ? 'dropdown active' : 'dropdown'}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <span>Services</span>
              <ul 
                className={`dropdown-menu${servicesOpen ? ' show' : ''}`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <li><Link to="/services-list">Services List</Link></li>
                <li><Link to="/service-details">Service Details</Link></li>
              </ul>
            </li>
            <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Get in Touch</Link></li>
          </ul>
          <div className="navbar-right">
            <a href="tel:+15852018866" className="call-btn desktop-only">
              <span className="call-icon"><FaPhoneAlt /></span>
              <span className="call-number">+1 (585) 201-8866</span>
            </a>
            {/* Mobile Menu Toggle Button */}
            <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
              <FaBars />
            </div>
          </div>
        </nav>
      </header>

      {/* Transparent Scroll Navbar */}
      <nav className={`scroll-navbar ${isScrolled ? 'show' : ''}`}>
        <div className="scroll-nav-container">
          <Link to="/" className="scroll-logo" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo2} alt="SmartWeb Experts" className="scroll-logo-img" />
            <div className="scroll-logo-text">
              <span className="scroll-logo-main">SMARTWEB</span>
              <span className="scroll-logo-sub">EXPERTS</span>
            </div>
          </Link>
          <ul className="scroll-nav-links desktop-only">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
            <li
              className={location.pathname.startsWith('/services') || location.pathname.startsWith('/service-details') ? 'dropdown active' : 'dropdown'}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <span>Services</span>
              <ul 
                className={`dropdown-menu${servicesOpen ? ' show' : ''}`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <li><Link to="/services-list">Services List</Link></li>
                <li><Link to="/service-details">Service Details</Link></li>
              </ul>
            </li>
            <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
          </ul>
          <div className="scroll-nav-right">
            <a href="tel:+15852018866" className="scroll-call-btn desktop-only">
              <FaPhoneAlt />
              <span>+1 (585) 201-8866</span>
            </a>
            {/* Mobile Menu Toggle Button for Scroll Navbar */}
            <div className="mobile-nav-toggler scroll-mobile-toggle" onClick={toggleMobileMenu}>
              <FaBars />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'visible' : ''}`}>
        <div className="menu-backdrop" onClick={closeMobileMenu}></div>
        
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link to="/" onClick={closeMobileMenu}>
                <img src={logo} alt="SmartWebExperts" />
              </Link>
            </div>
            <div className="close-btn" onClick={closeMobileMenu}>
              <FaTimes />
            </div>
          </div>

          <ul className="navigation clearfix">
            <li className={location.pathname === '/' ? 'current' : ''}>
              <Link to="/" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className={location.pathname === '/about' ? 'current' : ''}>
              <Link to="/about" onClick={closeMobileMenu}>About</Link>
            </li>
            <li className={`dropdown ${location.pathname.startsWith('/services') ? 'current' : ''}`}>
              <a href="#" onClick={(e) => { e.preventDefault(); toggleMobileServices(); }}>
                Services
              </a>
              <div className="dropdown-btn" onClick={toggleMobileServices}>
                <FaAngleDown className={mobileServicesOpen ? 'active' : ''} />
              </div>
              <ul className={mobileServicesOpen ? 'show' : ''}>
                <li className={location.pathname === '/services-list' ? 'current' : ''}>
                  <Link to="/services-list" onClick={closeMobileMenu}>Services List</Link>
                </li>
                <li className={location.pathname === '/service-details' ? 'current' : ''}>
                  <Link to="/service-details" onClick={closeMobileMenu}>Service Details</Link>
                </li>
              </ul>
            </li>
            <li className={location.pathname === '/projects' ? 'current' : ''}>
              <Link to="/projects" onClick={closeMobileMenu}>Projects</Link>
            </li>
            <li className={location.pathname === '/contact' ? 'current' : ''}>
              <Link to="/contact" onClick={closeMobileMenu}>Get in Touch</Link>
            </li>
          </ul>

          <ul className="contact-list-one">
            <li>
              <div className="contact-info-box">
                <FaPhoneAlt className="icon" />
                <span className="title">Call Now</span>
                <a href="tel:+15852018866" style={{color:'#fff'}}>+1 (585) 201-8866</a>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <FaEnvelope className="icon" />
                <span className="title">Send Email</span>
                <a href="mailto:info@smartwebexperts.com" style={{color:'#fff'}}>info@smartwebexperts.com</a>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <FaClock className="icon" />
                <span className="title">Address</span>
                418 Broadway, STE n, Albany, NY 12207
              </div>
            </li>
          </ul>

          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com/smartwebexpertsofficial/">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/smart-web-experts">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/smartwebexperts/">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
