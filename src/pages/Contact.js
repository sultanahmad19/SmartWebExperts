import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from '../components/HeroSection';
import ContactSection from '../components/ContactSection';
import ContactFormSection from '../components/ContactFormSection';
import bg2mp4 from '../assets/images/bg5.mp4';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="contact-page">
      {/* SEO Meta Tags */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact Smart Web Experts - Web Design Company in Albany, NY | Get Free Quote</title>
        <meta name="title" content="Contact Smart Web Experts - Web Design Company in Albany, NY | Get Free Quote" />
        <meta name="description" content="Contact Smart Web Experts for web design, development, and digital marketing services in Albany, NY. Call +1 (585) 201-8866 or email for free consultation and quote." />
        <meta name="keywords" content="contact web design company Albany NY, web development contact, digital marketing services contact, Albany NY web designer" />
        <meta name="author" content="Smart Web Experts" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.smartwebexperts.com/contact" />
        <meta property="og:title" content="Contact Smart Web Experts - Web Design Company in Albany, NY | Get Free Quote" />
        <meta property="og:description" content="Contact Smart Web Experts for web design, development, and digital marketing services in Albany, NY. Call +1 (585) 201-8866 or email for free consultation." />
        <meta property="og:image" content="https://www.smartwebexperts.com/contact-og-image.jpg" />
        <meta property="og:site_name" content="Smart Web Experts" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.smartwebexperts.com/contact" />
        <meta property="twitter:title" content="Contact Smart Web Experts - Web Design Company in Albany, NY | Get Free Quote" />
        <meta property="twitter:description" content="Contact Smart Web Experts for web design, development, and digital marketing services in Albany, NY. Call +1 (585) 201-8866 or email for free consultation." />
        <meta property="twitter:image" content="https://www.smartwebexperts.com/contact-twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.smartwebexperts.com/contact" />
        
        {/* Local Business Schema Markup */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Smart Web Experts",
            "description": "Contact page for Smart Web Experts - web design and development company in Albany, NY",
            "url": "https://www.smartwebexperts.com/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Smart Web Experts",
              "description": "Leading web design and development company in Albany, NY",
              "url": "https://www.smartwebexperts.com",
              "logo": "https://www.smartwebexperts.com/logo.png",
              "image": "https://www.smartwebexperts.com/contact-image.jpg",
              "telephone": "+1-585-201-8866",
              "email": "info@smartwebexperts.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "418 Broadway, STE n",
                "addressLocality": "Albany",
                "addressRegion": "NY",
                "postalCode": "12207",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 42.6526,
                "longitude": -73.7562
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$",
              "currenciesAccepted": "USD",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 42.6526,
                  "longitude": -73.7562
                },
                "geoRadius": "50000"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 42.6526,
                  "longitude": -73.7562
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Design Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Design",
                      "description": "Custom website design services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Development",
                      "description": "Custom website development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Digital Marketing",
                      "description": "SEO and social media marketing"
                    }
                  }
                ]
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
        heading="Get in Touch" 
        subheading="Let's discuss your project and how we can help you achieve your goals"
        customVideoSrc={bg2mp4}
        buttons={[
          { label: 'Our Services', href: '/services', variant: 'style-one' },
          { label: 'Get in Touch', href: '#contact-form', variant: 'style-two' },
        ]}
        isHomePage={false}
        useVideoBackground={true}
        shouldLoop={false}
      />

      <div className="contact-content" data-aos="fade-up">
        <ContactSection />
        <ContactFormSection />
      </div>
    </div>
  );
};

export default Contact;