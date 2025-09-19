import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';
import CallToActionBanner from '../components/CallToActionBanner';
import bgmp4 from '../assets/images/bg.mp4';

const ServicesPage = () => (
  <div className="services-page">
    {/* SEO Meta Tags */}
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Our Services - Web Design, Development & Digital Marketing | Smart Web Experts</title>
      <meta name="title" content="Our Services - Web Design, Development & Digital Marketing | Smart Web Experts" />
      <meta name="description" content="Discover our comprehensive web design, development, and digital marketing services in Albany, NY. From custom websites to e-commerce solutions and SEO optimization." />
      <meta name="keywords" content="web design services, web development services, digital marketing services, e-commerce development, SEO services, Albany NY web designer" />
      <meta name="author" content="Smart Web Experts" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.smartwebexperts.com/services" />
      <meta property="og:title" content="Our Services - Web Design, Development & Digital Marketing | Smart Web Experts" />
      <meta property="og:description" content="Discover our comprehensive web design, development, and digital marketing services in Albany, NY. From custom websites to e-commerce solutions and SEO optimization." />
      <meta property="og:image" content="https://www.smartwebexperts.com/services-og-image.jpg" />
      <meta property="og:site_name" content="Smart Web Experts" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.smartwebexperts.com/services" />
      <meta property="twitter:title" content="Our Services - Web Design, Development & Digital Marketing | Smart Web Experts" />
      <meta property="twitter:description" content="Discover our comprehensive web design, development, and digital marketing services in Albany, NY. From custom websites to e-commerce solutions and SEO optimization." />
      <meta property="twitter:image" content="https://www.smartwebexperts.com/services-twitter-image.jpg" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.smartwebexperts.com/services" />
      
      {/* Services Schema Markup */}
      <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Our Services",
          "description": "Overview of web design, development, and digital marketing services offered by Smart Web Experts",
          "url": "https://www.smartwebexperts.com/services",
          "mainEntity": {
            "@type": "Organization",
            "name": "Smart Web Experts",
            "description": "Web design and development company in Albany, NY",
            "url": "https://www.smartwebexperts.com",
            "logo": "https://www.smartwebexperts.com/logo.png",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Services Catalog",
              "description": "Complete range of web design, development, and digital marketing services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Logo Design",
                    "description": "Professional logo design services for brand identity",
                    "provider": {
                      "@type": "Organization",
                      "name": "Smart Web Experts"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Design & Development",
                    "description": "Custom website design and development services",
                    "provider": {
                      "@type": "Organization",
                      "name": "Smart Web Experts"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce Development",
                    "description": "Complete online store solutions with payment processing",
                    "provider": {
                      "@type": "Organization",
                      "name": "Smart Web Experts"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Development",
                    "description": "Custom mobile applications for iOS and Android",
                    "provider": {
                      "@type": "Organization",
                      "name": "Smart Web Experts"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Marketing",
                    "description": "SEO, social media marketing, and content creation",
                    "provider": {
                      "@type": "Organization",
                      "name": "Smart Web Experts"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "2D/3D Animation",
                    "description": "Creative animation and visual effects services",
                    "provider": {
                      "@type": "Organization",
                      "name": "Smart Web Experts"
                    }
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
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 42.6526,
                "longitude": -73.7562
              },
              "geoRadius": "50000"
            }
          }
        }
      `}
      </script>
    </Helmet>

    <HeroSection
      heading={<>Our Services</>}
      subheading="Explore our full range of digital solutions tailored for your business."
      buttons={[
        { label: 'Contact Us', href: '#contact', className: 'theme-btn btn-style-one bg-theme-color2' },
        { label: 'See Projects', href: '#projects', className: 'theme-btn btn-style-two' },
      ]}
      useVideoBackground={true}
      videoSrc={bgmp4}
      shouldLoop={false}
    />
    <ServicesSection />
    <TestimonialSection />
    <ContactSection />
    <CallToActionBanner />
  </div>
);

export default ServicesPage;