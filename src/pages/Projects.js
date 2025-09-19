import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import ProjectsPortfolio from '../components/ProjectsPortfolio';
import CallToActionBanner from '../components/CallToActionBanner';
import bgmp4 from '../assets/images/bg2.mp4';

const Projects = () => (
  <div className="projects-page">
    {/* SEO Meta Tags */}
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Our Projects Portfolio - Web Design & Development Work | Smart Web Experts</title>
      <meta name="title" content="Our Projects Portfolio - Web Design & Development Work | Smart Web Experts" />
      <meta name="description" content="Explore our portfolio of successful web design, development, and digital marketing projects. See real examples of our work for businesses in Albany, NY and beyond." />
      <meta name="keywords" content="web design portfolio, web development projects, digital marketing portfolio, Albany NY web designer work, website examples" />
      <meta name="author" content="Smart Web Experts" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.smartwebexperts.com/projects" />
      <meta property="og:title" content="Our Projects Portfolio - Web Design & Development Work | Smart Web Experts" />
      <meta property="og:description" content="Explore our portfolio of successful web design, development, and digital marketing projects. See real examples of our work for businesses in Albany, NY and beyond." />
      <meta property="og:image" content="https://www.smartwebexperts.com/projects-og-image.jpg" />
      <meta property="og:site_name" content="Smart Web Experts" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.smartwebexperts.com/projects" />
      <meta property="twitter:title" content="Our Projects Portfolio - Web Design & Development Work | Smart Web Experts" />
      <meta property="twitter:description" content="Explore our portfolio of successful web design, development, and digital marketing projects. See real examples of our work for businesses in Albany, NY and beyond." />
      <meta property="twitter:image" content="https://www.smartwebexperts.com/projects-twitter-image.jpg" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.smartwebexperts.com/projects" />
      
      {/* Portfolio Schema Markup */}
      <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Our Projects Portfolio",
          "description": "Portfolio showcasing web design, development, and digital marketing projects by Smart Web Experts",
          "url": "https://www.smartwebexperts.com/projects",
          "mainEntity": {
            "@type": "Organization",
            "name": "Smart Web Experts",
            "description": "Web design and development company in Albany, NY",
            "url": "https://www.smartwebexperts.com",
            "logo": "https://www.smartwebexperts.com/logo.png",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Portfolio of Work",
              "description": "Collection of completed web design and development projects",
              "itemListElement": [
                {
                  "@type": "CreativeWork",
                  "name": "Web Design Projects",
                  "description": "Custom website design and development projects",
                  "creator": {
                    "@type": "Organization",
                    "name": "Smart Web Experts"
                  }
                },
                {
                  "@type": "CreativeWork",
                  "name": "E-commerce Solutions",
                  "description": "Online store development and e-commerce projects",
                  "creator": {
                    "@type": "Organization",
                    "name": "Smart Web Experts"
                  }
                },
                {
                  "@type": "CreativeWork",
                  "name": "Mobile App Development",
                  "description": "Custom mobile application projects",
                  "creator": {
                    "@type": "Organization",
                    "name": "Smart Web Experts"
                  }
                },
                {
                  "@type": "CreativeWork",
                  "name": "Digital Marketing Campaigns",
                  "description": "SEO and social media marketing projects",
                  "creator": {
                    "@type": "Organization",
                    "name": "Smart Web Experts"
                  }
                }
              ]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "418 Broadway, STE n",
              "addressLocality": "Albany",
              "addressRegion": "NY",
              "postalCode": "12207",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-585-201-8866",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://www.facebook.com/smartwebexpertsofficial/",
              "https://www.linkedin.com/company/smart-web-experts",
              "https://www.instagram.com/smartwebexperts/"
            ]
          }
        }
      `}
      </script>
    </Helmet>

    <HeroSection
      heading={<>Our Projects</>}
      subheading="See our portfolio of successful digital solutions and creative work."
      buttons={[
        { label: 'Contact Us', href: 'contact', variant: 'style-one', icon: 'fas fa-envelope' },
        { label: 'Our Services', href: 'services-list', variant: 'style-two', icon: 'fas fa-cogs' },
      ]}
      useVideoBackground={true}
      videoSrc={bgmp4}
      shouldLoop={false}
    />
    <ProjectsPortfolio />
    <CallToActionBanner />
  </div>
);

export default Projects;