import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import FeaturesSection from './components/FeaturesSection';
import ProjectsSectionTwo from './components/ProjectsSectionTwo';
import CustomPatternSection from './components/CustomPatternSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import FAQSection from './components/FAQSection';
import ReviewLogosBar from './components/ReviewLogosBar';
import TestimonialSection from './components/TestimonialSection';
import GrowthCTASection from './components/GrowthCTASection';
import ContactSection from './components/ContactSection';
import CallToActionBanner from './components/CallToActionBanner';
import MainFooter from './components/MainFooter';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServicesList from './pages/ServicesList';
import ServiceDetails from './pages/ServiceDetails';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import LiveChat from './components/LiveChat';
import TawkToChat from './components/TawkToChat';
import ScrollToTopButton from './components/ScrollToTopButton';
import bgmp4 from './assets/images/bg3.mp4';

import './styles/HeroSection.css';
import './styles/AboutSection.css';
import './styles/ServicesSection.css';
import './styles/FeaturesSection.css';
import './styles/ProjectsSectionTwo.css';
import './styles/CustomPatternSection.css';
import './styles/FAQSection.css';
import './styles/TestimonialSection.css';
import './styles/GrowthCTASection.css';
import './styles/ContactSection.css';
import './styles/CallToActionBanner.css';
import './styles/MainFooter.css';

// Homepage Component with SEO
const Homepage = () => (
  <>
    {/* Homepage SEO Meta Tags */}
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Smart Web Experts - Professional Web Design & Development Services | Albany, NY</title>
      <meta name="title" content="Smart Web Experts - Professional Web Design & Development Services | Albany, NY" />
      <meta name="description" content="Leading web design and development company in Albany, NY. Specializing in custom websites, e-commerce, mobile apps, and digital marketing. Get professional web solutions that drive business growth." />
      <meta name="keywords" content="web design Albany NY, web development, e-commerce development, mobile app development, digital marketing, SEO services, custom websites" />
      <meta name="author" content="Smart Web Experts" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.smartwebexperts.com/" />
      <meta property="og:title" content="Smart Web Experts - Professional Web Design & Development Services | Albany, NY" />
      <meta property="og:description" content="Leading web design and development company in Albany, NY. Specializing in custom websites, e-commerce, mobile apps, and digital marketing." />
      <meta property="og:image" content="https://www.smartwebexperts.com/homepage-og-image.jpg" />
      <meta property="og:site_name" content="Smart Web Experts" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.smartwebexperts.com/" />
      <meta property="twitter:title" content="Smart Web Experts - Professional Web Design & Development Services | Albany, NY" />
      <meta property="twitter:description" content="Leading web design and development company in Albany, NY. Specializing in custom websites, e-commerce, mobile apps, and digital marketing." />
      <meta property="twitter:image" content="https://www.smartwebexperts.com/homepage-twitter-image.jpg" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.smartwebexperts.com/" />
      
      {/* Homepage Schema Markup */}
      <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Smart Web Experts",
          "description": "Professional web design and development services in Albany, NY",
          "url": "https://www.smartwebexperts.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.smartwebexperts.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Smart Web Experts",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.smartwebexperts.com/logo.png"
            }
          }
        }
      `}
      </script>
    </Helmet>

    <HeroSection isHomePage={true} useVideoBackground={true} videoSrc={bgmp4} shouldLoop={false} />
    <AboutSection />
    <ServicesSection />
    <FeaturesSection />
    <ProjectsSectionTwo />
    <CustomPatternSection />
    <WhyChooseUsSection />
    <FAQSection />
    <ReviewLogosBar />
    <TestimonialSection />
    <GrowthCTASection />
    <ContactSection />
    <CallToActionBanner />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services-list" element={<ServicesList />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <MainFooter />
        <LiveChat />
        <TawkToChat />
        <ScrollToTopButton />
      </div>
    </HelmetProvider>
  );
}

export default App;
