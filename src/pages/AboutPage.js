import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from '../components/HeroSection';
import TestimonialSection from '../components/TestimonialSection';
import { Link } from 'react-router-dom';

// Import the new About page styles
import '../styles/AboutPage.css';

// Import the new images
import aboutImage1 from '../assets/images/WhatsApp Image 2025-08-12 at 11.15.33 PM.jpeg';
import aboutImage2 from '../assets/images/WhatsApp Image 2025-08-12 at 11.15.33 PM (1).jpeg';
import aboutImage3 from '../assets/images/WhatsApp Image 2025-08-12 at 11.15.33 PM (2).jpeg';
import aboutImage4 from '../assets/images/WhatsApp Image 2025-08-12 at 11.15.34 PM.jpeg';
import aboutImage5 from '../assets/images/WhatsApp Image 2025-08-12 at 11.15.34 PM (1).jpeg';
import bg6 from '../assets/images/bg6.mp4';

const AboutPage = () => {
  const [activeService, setActiveService] = useState('ecommerce');

  // Debug logging
  console.log('Current activeService:', activeService);

  const handleServiceChange = (service) => {
    console.log('Changing service to:', service);
    setActiveService(service);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="about-page">
      <Helmet>
        <title>About Us – Smart Web Experts | Digital Marketing, SEO, E-Commerce & Software Development</title>
        <meta name="description" content="Learn about Smart Web Experts, a leading web design and development company in Albany, NY with over 10 years of experience." />
        <meta name="keywords" content="about us, digital marketing, SEO services, e-commerce development, custom software development, Albany NY" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Us – Smart Web Experts" />
        <meta property="og:description" content="Your All-in-One Partner for Digital Marketing, SEO, E-Commerce & Software Development" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.smartwebexperts.com/about" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us – Smart Web Experts" />
        <meta name="twitter:description" content="Your All-in-One Partner for Digital Marketing, SEO, E-Commerce & Software Development" />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Smart Web Experts",
              "description": "Leading web design and development company specializing in custom digital solutions",
              "url": "https://www.smartwebexperts.com",
              "logo": "https://www.smartwebexperts.com/logo.png",
              "foundingDate": "2014",
              "numberOfEmployees": "10-50",
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
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Design Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Logo Design",
                      "description": "Creative logo design services"
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
                      "name": "E-commerce Development",
                      "description": "Online store development"
                    }
                  }
                ]
            }
          }
        `}
        </script>
      </Helmet>

      <HeroSection
        heading={
          <>About Us</>
        }
        subheading="Your All-in-One Partner for Digital Marketing, SEO, E-Commerce & Software Development"
        buttons={[
          { label: 'Our Services', href: '/services-list', className: 'theme-btn btn-style-one bg-theme-color2' },
          { label: 'Get in Touch', href: '/contact', className: 'theme-btn btn-style-two' },
        ]}
        useVideoBackground={true}
        videoSrc={bg6}
        shouldLoop={false}
      />

      {/* Introduction Section */}
      <section className="about-introduction">
        <div className="auto-container">
          <div className="intro-content">
            <div className="intro-text" data-aos="fade-right">
              <h2>Introduction – Who We Are</h2>
              <p className="lead-text">
                At Smart Web Experts, we are more than just a digital solutions provider—we are strategic growth partners for businesses seeking to thrive in today's highly competitive, technology-driven marketplace.
              </p>
              <p>
                For over a decade, our team has been at the forefront of network deployment, infrastructure setup, systems integration, and custom software development—delivering solutions that help businesses operate smarter, faster, and more efficiently.
              </p>
              <p>
                Over the last 6+ years, we have expanded our focus to digital marketing, SEO, and e-commerce development, helping brands grow their online visibility, generate leads, and boost sales through proven, data-driven strategies.
              </p>
              <p>
                With a portfolio of over <strong>63 satisfied clients</strong>—and counting—we continue to deliver measurable results that bridge the gap between technology and marketing, ensuring that every project not only works technically but also succeeds commercially.
              </p>
            </div>
            <div className="intro-image" data-aos="fade-left">
              <img src={aboutImage1} alt="Smart Web Experts Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="core-services">
        <div className="auto-container">
          <div className="section-header" data-aos="fade-down">
            <h2>Our Core Services</h2>
          </div>
          <div className="services-grid">
            <div className="service-card" data-aos="fade-up" data-aos-delay={100}>
              <div className="service-icon">🎯</div>
              <h3>Digital Marketing & SEO Services</h3>
              <p>Boost visibility, attract the right audience, and convert them into loyal customers.</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay={200}>
              <div className="service-icon">🛒</div>
              <h3>E-Commerce Development & Marketing</h3>
              <p>Build high-performing online stores designed for conversion and growth.</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay={300}>
              <div className="service-icon">💻</div>
              <h3>Custom Software Development</h3>
              <p>Tailored solutions to streamline processes and enhance productivity.</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay={400}>
              <div className="service-icon">🌐</div>
              <h3>Network Deployment & Integration</h3>
              <p>Reliable, secure infrastructure to power your business operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="story-mission">
        <div className="auto-container">
          <div className="story-content">
            <div className="story-image" data-aos="fade-right">
              <img src={aboutImage2} alt="Our Journey" />
            </div>
            <div className="story-text" data-aos="fade-left">
              <h2>Our Story & Mission</h2>
              <div className="story-section">
                <h3>Our Journey</h3>
                <p>
                  Founded by a group of technology and marketing professionals, Smart Web Experts began as an IT infrastructure and deployment consultancy, working on large-scale projects across multiple industries.
                </p>
                <p>
                  Our early years were spent designing network topologies, deploying enterprise-grade infrastructure, and integrating mission-critical systems for clients ranging from startups to multinational corporations.
                </p>
                <p>
                  By 2017, we recognized that technology alone wasn't enough—businesses needed marketing expertise to leverage these systems for growth. That's when we expanded into digital marketing, SEO, and e-commerce solutions, becoming a full-service digital transformation partner.
                </p>
              </div>
              <div className="mission-section">
                <h3>Our Mission</h3>
                <p>
                  To empower businesses by combining cutting-edge technology with strategic marketing, creating integrated solutions that deliver measurable, sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* Service Offerings Section */}
       <section className="service-offerings">
         <div className="auto-container">
           <div className="section-header" data-aos="fade-down">
             <h2>What We Do – Service Offerings</h2>
             <p>Comprehensive digital solutions designed to drive your business growth and success</p>
           </div>
          
          <div className="services-tabs-container" data-aos="fade-up">
            {/* Services Navigation Sidebar */}
            <div className="services-sidebar">
              <div className="services-nav">
                <button 
                  className={`service-tab ${activeService === 'digital-marketing' ? 'active' : ''}`}
                  onClick={() => handleServiceChange('digital-marketing')}
                  data-service="digital-marketing"
                >
                  <span className="service-icon">🎯</span>
                  <span className="service-name">Digital Marketing & SEO</span>
                </button>
                
                <button 
                  className={`service-tab ${activeService === 'ecommerce' ? 'active' : ''}`}
                  onClick={() => handleServiceChange('ecommerce')}
                  data-service="ecommerce"
                >
                  <span className="service-icon">🛒</span>
                  <span className="service-name">E-Commerce Development</span>
                </button>
                
                <button 
                  className={`service-tab ${activeService === 'software' ? 'active' : ''}`}
                  onClick={() => handleServiceChange('software')}
                  data-service="software"
                >
                  <span className="service-icon">💻</span>
                  <span className="service-name">Custom Software Development</span>
                </button>
                
                <button 
                  className={`service-tab ${activeService === 'network' ? 'active' : ''}`}
                  onClick={() => handleServiceChange('network')}
                  data-service="network"
                >
                  <span className="service-icon">🌐</span>
                  <span className="service-name">Network Deployment</span>
                </button>
              </div>
            </div>

            {/* Service Content Area */}
            <div className="service-content">
              {/* Digital Marketing & SEO Content */}
              <div className={`service-panel ${activeService === 'digital-marketing' ? 'active' : ''}`}>
                <div className="service-panel-header">
                  <h3>🎯 Digital Marketing & SEO Services</h3>
                  <p>Digital Marketing is the art and science of promoting your brand, products, or services online through a combination of organic (unpaid) and paid strategies. At Smart Web Experts, we take a holistic approach that blends data-driven insights, creative execution, and advanced optimization techniques to deliver results.</p>
                </div>
                
                <div className="service-panel-content">
                  {/* SEO Services */}
                  <div className="service-category-card">
                    <div className="category-card-header">
                      <div className="category-icon">🔍</div>
                      <div className="category-info">
                        <h4>Search Engine Optimization (SEO)</h4>
                        <p>Optimize your website to rank higher on search engines and increase organic visibility</p>
                      </div>
                    </div>
                    <div className="category-services-grid">
                      <div className="sub-service-item">
                        <div className="sub-service-icon">📊</div>
                        <h5>Keyword Research & Analysis</h5>
                        <p>Comprehensive keyword research to target high-value search terms</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">📝</div>
                        <h5>On-Page SEO</h5>
                        <p>Title tags, meta descriptions, header optimization, and content structure</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">⚡</div>
                        <h5>Technical SEO</h5>
                        <p>Site speed, mobile optimization, structured data, and crawlability</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">🔗</div>
                        <h5>Link Building</h5>
                        <p>Strategic link acquisition to build domain authority and rankings</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">📍</div>
                        <h5>Local SEO</h5>
                        <p>Optimize for local searches and Google My Business listings</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">📈</div>
                        <h5>SEO Analytics</h5>
                        <p>Track performance, rankings, and organic traffic growth</p>
                      </div>
                    </div>
                  </div>

                  {/* PPC Services */}
                  <div className="service-category-card">
                    <div className="category-card-header">
                      <div className="category-icon">💰</div>
                      <div className="category-info">
                        <h4>Pay-Per-Click (PPC) Advertising</h4>
                        <p>Targeted paid advertising campaigns that drive immediate results and measurable ROI</p>
                      </div>
                    </div>
                    <div className="category-services-grid">
                      <div className="sub-service-item">
                        <div className="sub-service-icon">🎯</div>
                        <h5>Google Ads Management</h5>
                        <p>Search, display, and shopping campaigns with expert optimization</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">🔄</div>
                        <h5>Retargeting Campaigns</h5>
                        <p>Re-engage visitors who didn't convert on their first visit</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">📱</div>
                        <h5>Social Media Ads</h5>
                        <p>Facebook, Instagram, LinkedIn, and TikTok advertising</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">📊</div>
                        <h5>Budget Optimization</h5>
                        <p>Maximize ROI through strategic budget allocation and bidding</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Marketing Services */}
                  <div className="service-category-card">
                    <div className="category-card-header">
                      <div className="category-icon">✍️</div>
                      <div className="category-info">
                        <h4>Content Marketing</h4>
                        <p>Create valuable, relevant content that attracts and engages your target audience</p>
                      </div>
                    </div>
                    <div className="category-services-grid">
                      <div className="sub-service-item">
                        <div className="sub-service-icon">📝</div>
                        <h5>Blog Content</h5>
                        <p>SEO-optimized blog posts, articles, and thought leadership content</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">📊</div>
                        <h5>Case Studies</h5>
                        <p>Detailed success stories showcasing your expertise and results</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">📋</div>
                        <h5>Whitepapers & E-books</h5>
                        <p>In-depth content to generate leads and establish authority</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">🎨</div>
                        <h5>Infographics & Visuals</h5>
                        <p>Engaging visual content that's easily shareable</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">📅</div>
                        <h5>Content Strategy</h5>
                        <p>Editorial planning and content calendar management</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">✍️</div>
                        <h5>Copywriting</h5>
                        <p>Persuasive copy for websites, ads, and marketing materials</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Marketing Services */}
                  <div className="service-category-card">
                    <div className="category-card-header">
                      <div className="category-icon">📱</div>
                      <div className="category-info">
                        <h4>Social Media Marketing</h4>
                        <p>Build meaningful connections with your audience across all social platforms</p>
                      </div>
                    </div>
                    <div className="category-services-grid">
                      <div className="sub-service-item">
                        <div className="sub-service-icon">🌱</div>
                        <h5>Organic Growth</h5>
                        <p>Build authentic following through engaging content and community</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">📢</div>
                        <h5>Paid Social Advertising</h5>
                        <p>Targeted ads on Facebook, Instagram, LinkedIn, and TikTok</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">💬</div>
                        <h5>Community Management</h5>
                        <p>Engage with followers, respond to comments, and build relationships</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">📊</div>
                        <h5>Social Media Strategy</h5>
                        <p>Comprehensive planning for brand presence and engagement</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">📈</div>
                        <h5>Performance Analytics</h5>
                        <p>Track engagement, reach, and conversion metrics</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">🎯</div>
                        <h5>Influencer Partnerships</h5>
                        <p>Collaborate with relevant influencers to expand reach</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* E-Commerce Development Content */}
              <div className={`service-panel ${activeService === 'ecommerce' ? 'active' : ''}`}>
                <div className="service-panel-header">
                  <h3>🛒 E-Commerce Development & Marketing</h3>
                  <p>E-commerce is more than just selling online—it's about creating an optimized shopping experience that converts casual visitors into paying customers. We build high-performing online stores that drive sales and growth.</p>
                </div>
                
                <div className="service-panel-content">
                  <div className="service-category-card">
                    <div className="category-card-header">
                      <div className="category-icon">🛒</div>
                      <div className="category-info">
                        <h4>Our E-Commerce Services Include:</h4>
                        <p>Comprehensive e-commerce solutions designed to maximize your online sales and customer experience</p>
                      </div>
                    </div>
                    <div className="category-services-grid">
                      <div className="sub-service-item">
                        <div className="sub-service-icon">🏗️</div>
                        <h5>Platform Expertise</h5>
                        <p>Shopify, WooCommerce, Magento, BigCommerce, Custom-built solutions</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">🎨</div>
                        <h5>Store Design & UX</h5>
                        <p>Responsive, user-friendly layouts for better engagement and conversion</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">📊</div>
                        <h5>Conversion Rate Optimization (CRO)</h5>
                        <p>A/B testing, heatmap analysis, and funnel optimization</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">🔍</div>
                        <h5>E-Commerce SEO</h5>
                        <p>Optimizing product descriptions, category pages, and metadata</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">🤖</div>
                        <h5>Marketing Automation</h5>
                        <p>Abandoned cart recovery, email campaigns, loyalty programs</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">📱</div>
                        <h5>Mobile Optimization</h5>
                        <p>Mobile-first design for seamless shopping on all devices</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom Software Development Content */}
              <div className={`service-panel ${activeService === 'software' ? 'active' : ''}`}>
                <div className="service-panel-header">
                  <h3>💻 Custom Software Development</h3>
                  <p>Whether you need a web app, mobile app, or enterprise software, our team builds solutions tailored to your unique business needs. We transform your ideas into powerful, scalable applications.</p>
                </div>
                
                <div className="service-panel-content">
                  <div className="service-category-card">
                    <div className="category-card-header">
                      <div className="category-icon">💻</div>
                      <div className="category-info">
                        <h4>Our Software Development Capabilities:</h4>
                        <p>Full-stack development solutions that scale with your business growth</p>
                      </div>
                    </div>
                    <div className="category-services-grid">
                      <div className="sub-service-item">
                        <div className="sub-service-icon">🌐</div>
                        <h5>Custom Web Applications</h5>
                        <p>CRM systems, booking portals, dashboards, and business tools</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">📱</div>
                        <h5>Mobile Applications</h5>
                        <p>iOS, Android, and cross-platform apps with native performance</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">🔌</div>
                        <h5>API Development & Integration</h5>
                        <p>Secure data exchange between systems and third-party services</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">☁️</div>
                        <h5>Cloud Solutions & DevOps</h5>
                        <p>Scalable, secure, and efficient deployments with continuous integration</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">🗄️</div>
                        <h5>Database Design</h5>
                        <p>Optimized data structures and management systems</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">🔒</div>
                        <h5>Security & Testing</h5>
                        <p>Comprehensive security measures and quality assurance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Network Deployment Content */}
              <div className={`service-panel ${activeService === 'network' ? 'active' : ''}`}>
                <div className="service-panel-header">
                  <h3>🌐 Network Deployment & Integration</h3>
                  <p>We provide end-to-end deployment services for businesses that require reliable, scalable, and secure IT infrastructure. Our expertise ensures your technology foundation supports your business growth.</p>
                </div>
                
                <div className="service-panel-content">
                  <div className="service-category-card">
                    <div className="category-card-header">
                      <div className="category-icon">🌐</div>
                      <div className="category-info">
                        <h4>Our Infrastructure Services Include:</h4>
                        <p>Enterprise-grade infrastructure solutions for reliable business operations</p>
                      </div>
                    </div>
                    <div className="category-services-grid">
                      <div className="sub-service-item">
                        <div className="sub-service-icon">🏗️</div>
                        <h5>Network Design & Implementation</h5>
                        <p>LAN, WAN, wireless solutions, and security protocols</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">☁️</div>
                        <h5>Cloud Migration</h5>
                        <p>Move from on-premises to cloud with zero downtime and data integrity</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">🔗</div>
                        <h5>Systems Integration</h5>
                        <p>Unifying multiple software tools into a single, efficient ecosystem</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">🔒</div>
                        <h5>Security & Compliance</h5>
                        <p>Implementing enterprise-grade security measures and compliance standards</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">📊</div>
                        <h5>24/7 Monitoring</h5>
                        <p>Proactive monitoring and maintenance for optimal performance</p>
                      </div>
                      <div className="sub-service-item">
                        <div className="sub-service-icon">🚀</div>
                        <h5>Performance Optimization</h5>
                        <p>Speed optimization and capacity planning for growth</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* Approach & Process Section */}
       <section className="approach-process">
         <div className="auto-container">
           <div className="section-header" data-aos="fade-down">
             <h2>Our Approach & Process</h2>
             <p>We follow a four-phase methodology:</p>
           </div>
           <div className="process-steps">
             <div className="process-step" data-aos="fade-up" data-aos-delay={100}>
               <div className="step-number">1</div>
               <h3>Discovery & Strategy</h3>
               <p>Understand your goals, challenges, and target audience.</p>
             </div>
             <div className="process-step" data-aos="fade-up" data-aos-delay={200}>
               <div className="step-number">2</div>
               <h3>Design & Development</h3>
               <p>Create a custom roadmap for your project.</p>
             </div>
             <div className="process-step" data-aos="fade-up" data-aos-delay={300}>
               <div className="step-number">3</div>
               <h3>Implementation & Optimization</h3>
               <p>Deploy solutions and monitor performance.</p>
             </div>
             <div className="process-step" data-aos="fade-up" data-aos-delay={400}>
               <div className="step-number">4</div>
               <h3>Support & Growth</h3>
               <p>Continuous improvement and long-term scaling.</p>
             </div>
           </div>
         </div>
       </section>

             {/* Experience & Portfolio Section */}
       <section className="experience-portfolio">
         <div className="auto-container">
           <div className="experience-content">
             <div className="experience-text" data-aos="fade-right">
               <h2>Our Experience & Portfolio</h2>
               <div className="experience-stats" data-aos="fade-up" data-aos-delay={200}>
                 <div className="stat-item">
                   <div className="stat-number">63+</div>
                   <div className="stat-label">Clients Served</div>
                   <p>across industries including retail, healthcare, manufacturing, real estate, and e-commerce.</p>
                 </div>
               </div>
               
               <div className="example-results">
                 <h3>Example Results:</h3>
                 <div className="result-item" data-aos="fade-up" data-aos-delay={300}>
                   <h4>SEO:</h4>
                   <p>300% increase in organic traffic for a B2B SaaS client in 6 months.</p>
                 </div>
                 <div className="result-item" data-aos="fade-up" data-aos-delay={400}>
                   <h4>E-Commerce:</h4>
                   <p>45% boost in online sales for a fashion retailer.</p>
                 </div>
                 <div className="result-item" data-aos="fade-up" data-aos-delay={500}>
                   <h4>Software:</h4>
                   <p>Automated data management system saving 20+ hours/week for a logistics company.</p>
                 </div>
               </div>
             </div>
             <div className="experience-image" data-aos="fade-left">
               <img src={aboutImage3} alt="Our Experience" />
             </div>
           </div>
         </div>
       </section>

             {/* Why Choose Us Section */}
       <section className="why-choose-about">
         <div className="auto-container">
           <div className="section-header" data-aos="fade-down">
             <h2>Why Choose Smart Web Experts</h2>
           </div>
           <div className="reasons-grid">
             <div className="reason-item" data-aos="fade-up" data-aos-delay={100}>
               <div className="reason-icon">🔄</div>
               <h3>Full-Service Expertise</h3>
               <p>From backend infrastructure to frontend marketing.</p>
             </div>
             <div className="reason-item" data-aos="fade-up" data-aos-delay={200}>
               <div className="reason-icon">📊</div>
               <h3>Proven Track Record</h3>
               <p>Real case studies with measurable results.</p>
             </div>
             <div className="reason-item" data-aos="fade-up" data-aos-delay={300}>
               <div className="reason-icon">🤝</div>
               <h3>Client-Centric Approach</h3>
               <p>We prioritize long-term partnerships.</p>
             </div>
             <div className="reason-item" data-aos="fade-up" data-aos-delay={400}>
               <div className="reason-icon">🚀</div>
               <h3>Innovation-Driven</h3>
               <p>Staying ahead with emerging technologies and trends.</p>
             </div>
           </div>
         </div>
       </section>

             {/* Client Testimonials Section */}
       <section className="client-testimonials">
         <div className="auto-container">
           <div className="section-header" data-aos="fade-down">
             <h2>Client Testimonials</h2>
           </div>
           <div className="testimonials-grid">
             <div className="testimonial-item" data-aos="fade-up" data-aos-delay={100}>
               <div className="testimonial-content">
                 <p>"Smart Web Experts transformed our online store and helped us rank on page 1 of Google. Sales have doubled in just 4 months."</p>
                 <div className="testimonial-author">
                   <strong>– Retail Client</strong>
                 </div>
               </div>
             </div>
             <div className="testimonial-item" data-aos="fade-up" data-aos-delay={200}>
               <div className="testimonial-content">
                 <p>"Their software integration saved us hours each week. Highly recommend their technical expertise."</p>
                 <div className="testimonial-author">
                   <strong>– Logistics Client</strong>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

             {/* Get Started Section */}
       <section className="get-started">
         <div className="auto-container">
           <div className="get-started-content">
             <div className="get-started-text" data-aos="fade-right">
               <h2>Get Started with Us</h2>
               <p>
                 We're ready to take your business to the next level. Whether you need SEO, digital marketing, custom software, or e-commerce development, we have the skills and experience to deliver.
               </p>
               <div className="cta-buttons" data-aos="fade-up" data-aos-delay={200}>
                 <a href="tel:+1-585-201-8866" className="cta-button phone">
                   📞 Call Now
                 </a>
                 <Link to="/contact" className="cta-button contact">
                   📧 Get in Touch
                 </Link>
               </div>
               <p className="cta-subtext">See how we can help you grow.</p>
             </div>
             <div className="get-started-image" data-aos="fade-left">
               <img src={aboutImage4} alt="Get Started with Us" />
             </div>
           </div>
         </div>
       </section>

      {/* Keep existing sections for consistency */}
      
      <TestimonialSection />
    </div>
  );
};

export default AboutPage;