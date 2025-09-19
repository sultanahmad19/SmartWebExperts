import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStore, 
  faPlay, 
  faPalette, 
  faCode, 
  faShoppingCart, 
  faMobileAlt, 
  faSearch, 
  faChartLine, 
  faBullseye, 
  faPen 
} from '@fortawesome/free-solid-svg-icons';

import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';
import bgmp4 from '../assets/images/bg.mp4';

const ServicesList = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      disable: 'mobile',
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      easing: 'ease',
      anchorPlacement: 'top-bottom',
    });
  }, []);

  const services = [
    {
      id: 'logo-design',
      title: 'Logo & Branding Design',
      description: 'Custom logo concepts, strategic color/typography, usage guidelines, and full-rights asset delivery. Logo packages from $88 with clear inclusions (concepts, revisions, TAT, ownership rights).',
      icon: faBullseye,
      link: '/service-details?service=logo-design',
      features: ['Brand Identity', 'Multiple Concepts', 'Revisions', 'File Formats'],
      price: 'Starting from $88'
    },
    {
      id: 'web-designing',
      title: 'Website Design & Development',
      description: 'Get a responsive 5–8 page website with basic SEO and admin panel from $1,988. Upgrade to an Elite 15-page dynamic build with advanced features from $2,988. Built for speed, mobile-first, and conversion-focused.',
      icon: faPalette,
      link: '/service-details?service=web-designing',
      features: ['Responsive Design', 'User Experience', 'Modern UI', 'Cross-browser Compatible'],
      price: 'Starting from $1,988'
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Full-stack web development using cutting-edge technologies like React, Node.js, and modern frameworks. We build scalable, secure, and high-performance web applications with custom functionality, database design, API development, and third-party integrations.',
      icon: faCode,
      link: '/service-details?service=web-development',
      features: ['Frontend Development', 'Backend Development', 'Database Design', 'API Integration'],
      price: 'Starting from $1,988'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Development',
      description: 'Shopify or WooCommerce setup with secure checkout and payment gateways. Product pages optimized for conversions, with inventory and shipping tools. Marketplace integrations (Amazon, eBay, Walmart, etc.) and automation options.',
      icon: faShoppingCart,
      link: '/service-details?service=ecommerce',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Order Processing'],
      price: 'Starting from $1,288'
    },
    {
      id: 'mobile-apps',
      title: 'Mobile App Development',
      description: 'iOS and Android apps—native or cross-platform—built for speed and usability. API and third-party integrations with secure data flows. Full-cycle development and post-launch support.',
      icon: faMobileAlt,
      link: '/service-details?service=mobile-apps',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Publishing'],
      price: 'Starting from $2,988'
    },
    {
      id: 'seo',
      title: 'Search Engine Optimization (SEO)',
      description: 'On-page SEO: titles, meta descriptions, headings, URLs, internal links, image alt text. Technical SEO: speed fixes, sitemaps, indexing, and site health improvements. Monthly performance tracking with clear next steps.',
      icon: faSearch,
      link: '/service-details?service=seo',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Performance Monitoring'],
      price: 'Starting from $898'
    },
    {
      id: 'animations',
      title: '2D & 3D Animation',
      description: 'Professional 2D and 3D animation services for marketing, education, and entertainment. We create explainer videos, product showcases, social media clips, and brand animations with full production including scriptwriting, voiceover, sound effects, and music composition.',
      icon: faPlay,
      link: '/service-details?service=animations',
      features: ['2D Animation', '3D Animation', 'Video Production', 'Motion Graphics'],
      price: 'Custom Quote'
    },
    {
      id: 'social-media-marketing',
      title: 'Social Media Marketing',
      description: 'Launch on 2 platforms with 3 posts per week from $500. Page optimization, branded content creation, and community management. Targeted ad campaigns and retargeting to turn followers into customers.',
      icon: faChartLine,
      link: '/service-details?service=social-media-marketing',
      features: ['Social Media Strategy', 'Content Creation', 'Community Management', 'Analytics'],
      price: 'Starting from $500'
    },
    {
      id: 'web-content-writing',
      title: 'Content Writing',
      description: 'SEO-optimized website copy, landing pages, and product descriptions. Blog posts and articles designed to rank and educate. Brand voice development and on-page SEO alignment.',
      icon: faPen,
      link: '/service-details?service=web-content-writing',
      features: ['Blog Posts', 'Website Content', 'SEO Writing', 'Copywriting'],
      price: 'Starting from $50'
    }
  ];

  return (
    <div className="services-list-page">
      <Helmet>
        <title>Our Services - Smart Web Experts | Web Design & Development Services</title>
        <meta name="description" content="Explore our comprehensive range of web design, development, and digital marketing services. From custom websites to SEO optimization, we deliver results." />
        <meta name="keywords" content="web design services, web development, SEO services, digital marketing, e-commerce development, mobile app development" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Our Services - Smart Web Experts" />
        <meta property="og:description" content="Comprehensive web design, development, and digital marketing services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.smartwebexperts.com/services" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services - Smart Web Experts" />
        <meta name="twitter:description" content="Comprehensive web design, development, and digital marketing services" />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Web Design and Development Services",
            "description": "Comprehensive digital solutions including web design, development, e-commerce, mobile apps, SEO, and digital marketing",
            "url": "https://www.smartwebexperts.com/services",
            "numberOfItems": 9,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Service",
                  "name": "Logo & Branding Design",
                  "description": "Custom logo concepts, strategic color/typography, usage guidelines, and full-rights asset delivery",
                  "url": "https://www.smartwebexperts.com/service-details?service=logo-design",
                  "provider": {
                    "@type": "Organization",
                    "name": "Smart Web Experts"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Service",
                  "name": "Website Design & Development",
                  "description": "Responsive website design with basic SEO and admin panel, upgrade to Elite dynamic builds",
                  "url": "https://www.smartwebexperts.com/service-details?service=web-designing",
                  "provider": {
                    "@type": "Organization",
                    "name": "Smart Web Experts"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Service",
                  "name": "Web Development",
                  "description": "Full-stack web development with latest technologies and frameworks",
                  "url": "https://www.smartwebexperts.com/service-details?service=web-development",
                  "provider": {
                    "@type": "Organization",
                    "name": "Smart Web Experts"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Service",
                  "name": "E-commerce Development",
                  "description": "Shopify or WooCommerce setup with secure checkout and payment gateways",
                  "url": "https://www.smartwebexperts.com/service-details?service=ecommerce",
                  "provider": {
                    "@type": "Organization",
                    "name": "Smart Web Experts"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "Service",
                  "name": "Mobile App Development",
                  "description": "iOS and Android apps—native or cross-platform—built for speed and usability",
                  "url": "https://www.smartwebexperts.com/service-details?service=mobile-apps",
                  "provider": {
                    "@type": "Organization",
                    "name": "Smart Web Experts"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 6,
                "item": {
                  "@type": "Service",
                  "name": "Search Engine Optimization (SEO)",
                  "description": "On-page and technical SEO with monthly performance tracking",
                  "url": "https://www.smartwebexperts.com/service-details?service=seo",
                  "provider": {
                    "@type": "Organization",
                    "name": "Smart Web Experts"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 7,
                "item": {
                  "@type": "Service",
                  "name": "2D & 3D Animation",
                  "description": "Explainers, product showcases, and social clips with full production",
                  "url": "https://www.smartwebexperts.com/service-details?service=animations",
                  "provider": {
                    "@type": "Organization",
                    "name": "Smart Web Experts"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 8,
                "item": {
                  "@type": "Service",
                  "name": "Social Media Marketing",
                  "description": "Strategic social media campaigns with platform optimization and content creation",
                  "url": "https://www.smartwebexperts.com/service-details?service=social-media-marketing",
                  "provider": {
                    "@type": "Organization",
                    "name": "Smart Web Experts"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 9,
                "item": {
                  "@type": "Service",
                  "name": "Content Writing",
                  "description": "SEO-optimized website copy, landing pages, and product descriptions",
                  "url": "https://www.smartwebexperts.com/service-details?service=web-content-writing",
                  "provider": {
                    "@type": "Organization",
                    "name": "Smart Web Experts"
                  }
                }
              }
            ]
          }
        `}
        </script>
      </Helmet>

      <HeroSection 
        heading="Our Services" 
        subheading="Comprehensive digital solutions to help your business grow"
        customVideoSrc={bgmp4}
        useVideoBackground={true}
        shouldLoop={false}
      />

      <ServicesGrid services={services} />
    </div>
  );
};

export default ServicesList;