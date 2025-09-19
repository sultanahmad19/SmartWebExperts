import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../styles/ServiceDetails.css';
import backgroundVideo from '../assets/images/bg4.mp4';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


import web from '../assets/images/resource/project-thumb-1.webp';
import logo from '../assets/images/resource/p3.jpg';
import ecom from '../assets/images/resource/project-thumb-11.png';
import animation from '../assets/images/resource/ani.webp';
import app from '../assets/images/resource/project-thumb.png';
import seo from '../assets/images/resource/seo.png';
import social from '../assets/images/resource/18.webp';  
import content from '../assets/images/resource/14.webp';  



const ServiceDetails = () => {
  const location = useLocation();
  const [activeService, setActiveService] = useState('logo-design');

  // Read service from URL parameters
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });

    const urlParams = new URLSearchParams(location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam && servicesData[serviceParam]) {
      setActiveService(serviceParam);
    }
  }, [location.search]);

  // All services data extracted from PHP file
  const servicesData = {
    'logo-design': {
      title: 'Logo Design',
      image: logo,
      description: 'Our creative logo design service helps your brand stand out with a unique, memorable identity. We focus on modern trends, color psychology, and your business vision to deliver logos that leave a lasting impression.',
      features: [
        '100% original concepts',
        'Multiple design revisions',
        'Fast turnaround time',
        'Full copyright transfer'
      ],
      packages: [
        {
          name: 'Basic Logo Package',
          price: '$88',
          features: [
            '3 Custom Logo Design Concepts',
            '1 Dedicated Designer',
            '4 Revisions',
            '48 to 72 hours TAT',
            'All Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)',
            '100% Unique Design Guarantee',
            '100% Satisfaction Guarantee',
            '100% Money Back Guarantee *',
            '100% Ownership Rights',
          ]
        },
        {
          name: 'Start Up Logo Package',
          price: '$168',
          features: [
            '5 Custom Logo Design Concepts',
            'By 2 Designers',
            'FREE Icon',
            'FREE Business Card Design',
            'UNLIMITED Revisions',
            '48 to 72 hours TAT',
            'All Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
            '100% Ownership Rights',
          ]
        },
        {
          name: 'Professional Logo Package',
          price: '$248',
          features: [
            'UNLIMITED Logo Design Concepts',
            'By 3 Designers',
            'UNLIMITED Revisions',
            'FREE Stationary Design Set',
            'FREE MS Word Letterhead',
            '48 to 72 hours TAT',
            'All Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)',
            '100% Ownership Rights',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
            '15% Discount on your next order'
          ]
        },
        {
          name: 'Elite Logo Package',
          price: '$348',
          features: [
            'UNLIMITED Logo Design Concepts',
            'By 5 Design Artist',
            'FREE Stationary Design Set',
            'UNLIMITED Revisions',
            'FREE MS Word Letterhead',
            'Free Email Signature',
            'All Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)',
            '100% Ownership Rights',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
            '48 to 72 hours TAT',
            '15% Discount on your next order'
          ]
        },
        {
          name: 'Business Logo Package',
          price: '$488',
          features: [
            'UNLIMITED Logo Design Concepts',
            'By 8 Design Artist',
            'UNLIMITED Revisions',
            '2 Stationary Design Sets',
            'Double Sided Flyer Design',
            'Bi-Fold Brochure',
            'FREE MS Word Letterhead',
            'Social Media Banners Design',
            'Free Email Signature',
            'FREE Fax Template',
            'All Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)',
            '100% Ownership Rights',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
          ]
        },
        {
          name: 'Gold Logo Package',
          price: '$1,048',
          features: [
            'UNLIMITED Logo Design Concepts',
            'By 8 Design Artist',
            'UNLIMITED Revisions',
            '2 Stationary Design Sets',
            'FREE MS Word Letterhead',
            'Free Email Signature',
            '3 Page Custom Website',
            'Content Management System',
            '2 Stock Photos',
            '2 Banner Designs',
            'jQuery Slider',
            'All Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)',
            '100% Ownership Rights',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
          ]
        },
        {
          name: '3D Logo Package',
          price: '$1,088',
          features: [
            'UNLIMITED Logo Design Concepts',
            'By 4 Designers',
            'UNLIMITED Revisions',
            '24 to 48 hours TAT',
            '100% Ownership Rights',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
          ]
        },
        {
          name: 'Professional Illustrative Package',
          price: '$1,188',
          features: [
            'UNLIMITED Logo Design Concepts',
            'By 4 Designers',
            'UNLIMITED Revisions',
            '24 to 48 hours TAT',
            '100% Ownership Rights',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
          ]
        },
        {
          name: 'Basic Illustrative Logo Package',
          price: '$588',
          features: [
            '3 Custom Logo Design Concepts',
            'By 2 Designers',
            'UNLIMITED Revisions',
            '48 to 72 hours TAT',
            'All Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)',
            '100% Ownership Rights',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
          ]
        },
        {
          name: 'Startup Illustrative Logo Package',
          price: '$788',
          features: [
            '4 Custom Logo Design Concepts',
            'By 3 Designers',
            '48 to 72 hours TAT',
            'UNLIMITED Revisions',
            'All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG,PDF)',
            '100% Ownership Rights',
            '100% Satisfaction Guarantee',
          ]
        }
      ]
    },
    'web-designing': {
      title: 'Web Designing',
      image: web,
      description: 'We craft visually stunning, user-friendly websites that engage your audience and drive results. Our designs are responsive, SEO-optimized, and tailored to your business goals.',
      features: [
        'Modern, clean layouts',
        'Mobile-first approach',
        'Conversion-focused design',
        'SEO best practices'
      ],
      packages: [
        {
          name: 'Basic Website Package',
          price: '$488',
          features: [
            '2 Stock Images',
            '3 Page Website',
            '1 jQuery Slider Banner',
            'Contact/Query Form',
            'Complete W3C Certified HTML',
            '48 to 72 hours TAT',
            'Complete Deployment',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
          ]
        },
        {
          name: 'Startup Website Package',
          price: '$788',
          features: [
            '5 Stock Photos',
            '5 Page Website',
            '3 Banner Design',
            '1 jQuery Slider Banner',
            'FREE Google Friendly Sitemap',
            'Complete W3C Certified HTML',
            '48 to 72 hours TAT',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
            'Mobile Responsive will be Additional $200*',
            'CMS will be Additional $250*'
          ]
        },
        {
          name: 'Professional Website Package',
          price: '$1,688',
          features: [
            '10 Unique Pages Website',
            'CMS / Admin Panel Support',
            '8 Stock images',
            '5 Banner Designs',
            '1 jQuery Slider Banner',
            'FREE Google Friendly Sitemap',
            'Complete W3C Certified HTML',
            '48 to 72 hours TAT',
            'Complete Deployment',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
          ]
        },
        {
          name: 'Elite Website Packages',
          price: '$2,988',
          features: [
            'Upto 15 Unique Pages Website',
            'Conceptual and Dynamic Website',
            'Mobile Responsive',
            'Online Reservation/Appointment Tool (Optional)',
            'Online Payment Integration (Optional)',
            'Custom Forms',
            'Lead Capturing Forms (Optional)',
            'Striking Hover Effects',
            'Newsletter Subscription (Optional)',
            'Newsfeed Integration',
            'Social Media Integration',
            'Search Engine Submission',
            '5 Stock Photos',
            '3 Unique Banner Design',
            '1 jQuery Slider Banner',
            'Complete W3C Certified HTML',
            '48 to 72 hours TAT',
            'Complete Deployment',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *'
          ]
        },
        {
          name: 'Corporate Website Packages',
          price: '$4,788',
          features: [
            '15 to 20 Pages Website',
            'Custom Made, Interactive, Dynamic & High End Design',
            'Custom WP (or) Custom PHP Development',
            '1 jQuery Slider Banner',
            'Up to 10 Custom Made Banner Designs',
            '10 Stock Images',
            'Unlimited Revisions',
            'Special Hoover Effects',
            'Content Management System (CMS)',
            'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
            'Online Payment Integration (Optional)',
            'Multi Lingual (Optional)',
            'Custom Dynamic Forms (Optional)',
            'Signup Area (For Newsletters, Offers etc.)',
            'Search Bar',
            'Live Feeds of Social Networks integration (Optional)',
            'Mobile Responsive',
            'FREE 5 Years Domain Name',
            'Free Google Friendly Sitemap',
            'Search Engine Submission',
            'Complete W3C Certified HTML',
            'Industry Specified Team of Expert Designers and Developers',
            'Complete Deployment',
            'Dedicated Accounts Manager',
            '100% Ownership Rights',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *'
          ]
        },
        {
          name: 'Business Website Packages',
          price: '$5,998',
          features: [
            '15 Seconds 2D Explainer Video',
            'Voice - Over & Sound Effects',
            'Professional Script Writing',
            'Storyboard',
            'SEO Meta Tags',
            '15 to 20 Pages Website',
            'Custom Made, Interactive, Dynamic & High End Design',
            'Custom WP (or) Custom PHP Development',
            '1 jQuery Slider Banner',
            'Up to 10 Custom Made Banner Designs',
            '10 Stock Images',
            'Unlimited Revisions',
            'Special Hoover Effects',
            'Content Management System (CMS)',
            'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
            'Online Payment Integration (Optional)',
            'Multi Lingual (Optional)',
            'Custom Dynamic Forms (Optional)',
            'Signup Area (For Newsletters, Offers etc.)',
            'Search Bar',
            'Live Feeds of Social Networks integration (Optional)',
            'Mobile Responsive',
            'FREE 5 Years Domain Name',
            'Free Google Friendly Sitemap',
            'Search Engine Submission',
            'Complete W3C Certified HTML',
            'Industry Specified Team of Expert Designers and Developers',
            'Complete Deployment',
            'Dedicated Accounts Manager',
            '100% Ownership Rights',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *'
          ]
        }
      ]
    },
    'e-commerce': {
      title: 'E-commerce',
      image: ecom,
      description: 'One Stop Designing is a leading eCommerce development company in the USA with over a decade of experience in the industry. We are able to offer a range of services to our clients to help them grow their businesses online.',
      features: [
        'Dropshipping',
        'Amazon',
        'eBay',
        'Shopify',
        'Alibaba',
        'Walmart',
        'Home Depot',
        'TikTok Shop',
        'Amazon FBA - Fulfillment by Amazon',
        'Amazon FBM - Fulfillment by Merchant',
        'Private Label',
        'Wholesale'
      ],
      packages: [
        {
          name: 'Startup E-Commerce Package',
          price: '$1,588',
          features: [
            'Customized Design',
            'Up-to 100 Products',
            'Content Management System (CMS)',
            'Mini Shopping Cart Integration',
            'Payment Module Integration',
            'Easy Product Search',
            'Dedicated designer & developer',
            'Unlimited Revisions',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
          ]
        },
        {
          name: 'Professional E-commerce Package',
          price: '$2,788',
          features: [
            'Customized Design',
            'Up-to 500 Products',
            'Content Management System (CMS)',
            'Full Shopping Cart Integration',
            'Payment Module Integration',
            'Easy Product Search',
            'Product Reviews',
            '5 Promotional Banners',
            'Team of Expert Designers & Developers',
            'Unlimited Revisions',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *',
          ]
        },
        {
          name: 'Elite E-commerce Package',
          price: '$7,388',
          features: [
            'UNLIMITED Logo Design Concepts',
            'By 6 Award Winning Designers',
            'Icon Design',
            'UNLIMITED Revisions',
            'Print Media',
            'Stationary Design (BusinessCard,Letterhead & Envelope)',
            'Invoice Design, Email Signature',
            'Bi-Fold Brochure (OR) 2 Sided Flyer Design',
            'Product Catalog Design',
            'Sign age Design (OR) Label Design',
            'T-Shirt Design (OR) Car Wrap Design',
            'Website',
            'E-Commerce Store Design',
            'Product Detail Page Design',
            'Unique Banner Slider',
            'Featured Products Showcase',
            'Full Shopping Cart Integration',
            'Unlimited Products',
            'Unlimited Categories',
            'Product Rating & Reviews',
            'Easy Product Search',
            'Payment Gateway Integration',
            'Multi-currency Support',
            'Content Management System',
            'Cutomer Log-in Area',
            'Mobile Responsive',
            'Social Media Plugins Integration',
            'Coupon Platfom',
            'Tell a Friend Feature',
            'Social Media Pages',
            'Facebook , Twitter, YouTube, Google+ & Pinterest Page Designs',
            'Value Added Services',
            'Dedicated Account Manager',
            'Unlimited Revisions',
            'All Final File Formats',
            '100% Ownership Rights',
            '100% Satisfaction Guarantee',
            '100% Unique Design Guarantee',
            '100% Money Back Guarantee *'
          ]
        }
      ]
    },
    'animations': {
      title: '2D/3D Animations',
      image: animation,
      description: 'Bring your ideas to life with our professional animation and video production. We create engaging, high-quality visuals for marketing, education, and entertainment.',
      features: [
        '2D & 3D animation',
        'Scriptwriting',
        'Voiceover options',
        'HD/4K output'
      ],
      packages: [
        {
          name: 'Starter Package',
          price: '$453',
          originalPrice: '$1510',
          features: [
            '30 to 45 seconds',
            'Cut out or White Board Animation',
            '3 Rounds of Revisions',
            'Accent Colors',
            'Custom Script',
            'Background Music',
            'Proffesional Voice over',
            'Animation Rendered in HD',
            '4 weeks Delivery',
            'Dedicated Project Manager',
            'Rush Delivery Add on: $50 for 24 Hour',
            'ADD ONS:',
            '100% Satisfaction Guarantee',
            '15 Days Money Back Guarantee',
            'Dedicated Account Manager',
          ]
        },
        {
          name: 'Advance',
          price: '$993',
          originalPrice: '$3310',
          features: [
            '60 to 90 seconds',
            '2D | Motion Graphics | Info Graphics | Detailed White Board',
            '5 Rounds of Revisions',
            'Fully Colored',
            'Custom Script',
            'Background Music + Sound Effects',
            'Proffesional Voice over',
            'Animation Rendered in HD',
            '4 weeks Delivery',
            'Dedicated Project Manager',
            'Rush Delivery Add on: $50 for 24 Hour',
            'ADD ONS:',
            '100% Satisfaction Guarantee',
            '15 Days Money Back Guarantee',
            'Dedicated Account Manager',
          ]
        },
        {
          name: 'EXCLUSIVE',
          price: '$1593',
          originalPrice: '$5310',
          features: [
            '60 to 90 seconds',
            '2D | Motion Graphics | Info Graphics | Detailed White Board',
            'Unlimited Revisions',
            'Detailing | Visual Effects',
            '2 Custom Themes',
            'Dedicated Team of 12 Artists',
            'Free Animated Logo',
            '15 seconds Teaser for Social Media',
            'Custom Script',
            'Background Music + Sound Effects',
            'Proffesional Voice over',
            'Animation Rendered in HD 4K',
            '4 weeks Delivery',
            'Dedicated Project Manager',
            'Rush Delivery Add on: $50 for 24 Hour',
            'ADD ONS:',
            '100% Satisfaction Guarantee',
            '15 Days Money Back Guarantee',
            'Dedicated Account Manager',
          ]
        }
      ]
    },
    'app-development': {
      title: 'App Development',
      image: app,
      description: 'Mobile App Development For The Future! Providing a well-earned visibility and business for your company is the core focus of our mobile app development company. Our experienced mobile app developers are equipped to develop user-friendly tools from emerging technologies and end-to-end development.',
      features: [
        '📱 iOS App Development',
        '🎮 Game App Development',
        '🤖 Android App Development',
        '💻 Cross-Platform App Development'
      ],
      packages: [] // Removed packages for App Development
    },
    'web-content-writing': {
      title: 'Web Content Writing',
      image: content ,
      description: 'Crafting a beautiful web page is only half the job done! You need high-quality content that resonates with your target audience to ensure that people keep on visiting your site for more information. Without strong content backing it up, your web page will be all but useless!',
      features: [
        'High quality, affordable web content writing service',
        'Expert website writers across industries and niches',
        '100% original and unique content.',
        'Ghostwritten – you own all rights to the content.',
        'Web Content keyword optimized for SEO'
      ],
      packages: [
        {
          name: 'Web Content Packages',
          price: '$50',
          features: [
            '250 Words per Page',
            'Timely Delivery',
            'Superior Standard Content',
            'Professional Industry Specific Writers',
            '100% Satisfaction Guarantee',
          ]
        },
        {
          name: 'Article Writing Packages',
          price: '$100',
          features: [
            '300 Words per Page',
            'Timely Delivery',
            'Superior Standard Content',
            'Professional Writers',
            '100% Satisfaction Guarantee',
          ]
        }
      ]
    },
    'seo': {
      title: 'SEO',
      image: seo,
      description: 'We let you build your brand identity with a competitive online marketing strategy. We can drive visitors to your site and help you convert them to leads and sales. With our extensive knowledge of the internet marketing industry, we can increase your sales by up to 500%!',
      features: [
        'SEO Audit',
        'Search Content Strategy',
        'Website Optimization',
        'Paid Search',
        'SEO Campaigns',
        'Ranking Optimization'
      ],
      packages: [
        {
          name: 'Startup SEO Package',
          price: '$898',
          features: [
            '5 Keywords',
            'Guaranteed Ranking on Google',
            'Off-site Optimization',
            'Link Building',
            'Social Bookmarking',
            'Basic Analytical Report',
            'In-depth Site Analysis',
            'Content Duplicity Check',
            'Initial Backlinks analysis',
            'Google Penalty Check',
            'Mobile Usability Check',
            'Competition Analysis',
            'Keyword Research',
            'Informational Content Writing & Sharing (2 - Per Month)',
            'Blog Writing (1 - Per Month)',
            'Press Release Social Bookmarking (5 - Per Month)',
            'NAP Syndication',
            'Google My Business / Bing Local Listing',
            'Citation Building',
            'Classified Submissions',
            'Google Analytics Analysis Report',
            'SEO Reports',
            'Search Engine Rank Report',
            'Dedicated Accounts Manager',
            'Monthly Action Plan',
            'Activity Report',
          ]
        },
        {
          name: 'SEO Identity Package',
          price: '$1,698',
          features: [
            '10 Keywords',
            'Guaranteed Ranking on Google',
            'Off-site Optimization',
            'On-site Optimization',
            'Link Building',
            'Social Bookmarking',
            'In-depth Site Analysis',
            'Content Duplicacy Check',
            'Initial Backlinks analysis',
            'Google Penalty Check',
            'Mobile Usability Check',
            'Competition Analysis',
            'Keyword Research',
            'Title & Meta Tags Optimization',
            'Content Optimization',
            'Page Speed Analysis & Optimization',
            'HTML Code Cleanup & Optimization',
            'Internal Link Structuring & Optimization',
            'Pages H tags Optimization',
            'Canonicalization/301 Redirect',
            'Website Page Load Optimization',
            'Schema Markup Implementation',
            'Image & Hyperlink Optimization',
            'Robots.txt Creation/Analysis',
            'Blog Writing (2 - Per Month)',
            'Informational Content Writing & Sharing (1 Per Month)',
            'Press Release Writing & Distribution',
            'Press Release Social Bookmarking',
            'Google Webmaster Tools Setup',
            'Google Analytics Setup & Integration',
          ]
        },
        {
          name: 'Elite SEO Package',
          price: '$3,098',
          features: [
            '20 Keywords',
            'Guaranteed Ranking on Google',
            'Off-site Optimization',
            'On-site Optimization',
            'Link Building',
            'Social Bookmarking',
            'In-depth Site Analysis',
            'Content Duplicacy Check',
            'Initial Backlinks analysis',
            'Google Penalty Check',
            'Mobile Usability Check',
            'Competition Analysis',
            'Keyword Research',
            'Page Speed Analysis & Optimization',
            'Title & Meta Tags Optimization',
            'Content Optimization',
            'HTML Code Cleanup & Optimization',
            'Internal Link Structuring & Optimization',
            'Pages H tags Optimization',
            'Canonicalization/301 Redirect',
            'Website Page Load Optimization',
            'Robots.txt Creation/Analysis',
            'Press Release Writing & Distribution',
            'Press Release Social Bookmarking',
            'Schema Markup Implementation',
            'Image & Hyperlink Optimization',
            'Google Webmaster Tools Setup',
            'Google Analytics Setup & Integration',
            'Blog Writing (2 - Per Month)',
            'Informational Content Writing & Sharing (1 Per Month)',
          ]
        }
      ]
    },
    'social-media-marketing': {
      title: 'Social Media Marketing',
      image: social,
      description: 'These days, everyone\'s online. From their mobile devices to their computers, we\'re all spending more and more time on social media each day. But what exactly is social media marketing? It involves several strategies designed to engage users and keep them coming back for more.',
      features: [
        'Social Brand Audit',
        'Social Strategy',
        'Crisis Response',
        'Content Development',
        'Community Management',
        'Campaign Management',
        'Reputation Management',
        'Marketing Analysis',
        'Strategic SMM plans and implementation'
      ],
      packages: [
        {
          name: 'Social Startup Packages',
          price: '$500',
          features: [
            '2 Platforms of Your Choice',
            '3 Post per week',
            'Business Page Optimization',
            'Content Creation',
            'Community Management',
          ]
        },
        {
          name: 'Social Professional Packages',
          price: '$1000',
          features: [
            '3 Platforms of Your Choice',
            '3 Post per week Content Creation',
            'Community Management',
            'Business Page Optimization',
            'Monthly Progress report',
            'Copy Writing',
            'Likes Campaign',
          ]
        },
        {
          name: 'Social Business Package',
          price: '$2500',
          features: [
            '4 Platforms of Your Choice',
            '4 Post Per week',
            'Copywriting & Visual designs',
            'Business Page Optimization',
            'Ad Campaign Management',
            'Spam monitoring',
            'Monthly Progress report',
            'Reputation Management',
            'Social Account Setup',
            'Content Creation',
            'Social Media Handling',
            'Query and comments reply',
          ]
        },
        {
          name: 'Social Pro Packages',
          price: '$5000',
          features: [
            '5 Platforms of Your Choice',
            '5 postings per week',
            'Copywriting & Visual Designs',
            'Business Page Optimization',
            'Ad Campaign Management',
            'Spam monitoring',
            'Monthly Progress report',
            'Reputation Management',
            'Social Account Setup',
            'Social Media Hearing',
            'Query and comments reply',
            'Content Creation reply',
            'Social Media Hearing',
          ]
        }
      ]
    },
    /* Removed duplicate web-design service - using web-designing instead */
    'web-development': {
      title: 'Web Development',
      image: web,
      description: 'Full-stack web development services using cutting-edge technologies. We build scalable, secure, and high-performance web applications tailored to your business needs.',
      features: [
        'Frontend Development',
        'Backend Development',
        'Database Design',
        'API Integration'
      ],
      packages: [
        {
          name: 'Basic Web Development Package',
          price: '$1,988',
          features: [
            '5-8 Page Website',
            'Responsive Design',
            'Basic Admin Panel',
            'Contact Forms',
            'SEO Optimization',
            'Basic Analytics',
            '48 to 72 hours TAT',
            '100% Satisfaction Guarantee'
          ]
        },
        {
          name: 'Professional Web Development Package',
          price: '$3,988',
          features: [
            '10-15 Page Website',
            'Responsive Design',
            'Advanced Admin Panel',
            'Custom Forms',
            'Database Integration',
            'API Development',
            'SEO Optimization',
            'Advanced Analytics',
            '48 to 72 hours TAT',
            '100% Satisfaction Guarantee'
          ]
        },
        {
          name: 'Enterprise Web Development Package',
          price: '$7,988',
          features: [
            '20+ Page Website',
            'Responsive Design',
            'Custom Admin Panel',
            'Advanced Forms',
            'Database Design',
            'API Development',
            'Third-party Integrations',
            'SEO Optimization',
            'Advanced Analytics',
            '48 to 72 hours TAT',
            '100% Satisfaction Guarantee'
          ]
        }
      ]
    },
    'ecommerce': {
      title: 'E-commerce Development',
      image: ecom,
      description: 'Complete e-commerce solutions that help you sell online. We build secure, scalable online stores with advanced features and seamless user experience.',
      features: [
        'Shopping Cart',
        'Payment Gateway',
        'Inventory Management',
        'Order Processing'
      ],
      packages: [
        {
          name: 'Basic E-commerce Package',
          price: '$1,288',
          features: [
            '5-10 Product Pages',
            'Shopping Cart',
            'Payment Gateway Integration',
            'Basic Admin Panel',
            'Mobile Responsive Design',
            'SEO Optimization',
            '48 to 72 hours TAT',
            '100% Satisfaction Guarantee'
          ]
        },
        {
          name: 'Professional E-commerce Package',
          price: '$2,488',
          features: [
            '10-20 Product Pages',
            'Advanced Shopping Cart',
            'Multiple Payment Gateways',
            'Inventory Management System',
            'Order Management',
            'Customer Accounts',
            'Advanced Admin Panel',
            'Mobile Responsive Design',
            'SEO Optimization',
            '48 to 72 hours TAT',
            '100% Satisfaction Guarantee'
          ]
        },
        {
          name: 'Enterprise E-commerce Package',
          price: '$4,988',
          features: [
            'Unlimited Product Pages',
            'Advanced Shopping Cart',
            'Multiple Payment Gateways',
            'Advanced Inventory Management',
            'Order Management System',
            'Customer Accounts & Reviews',
            'Advanced Admin Panel',
            'Analytics & Reporting',
            'Mobile Responsive Design',
            'SEO Optimization',
            '48 to 72 hours TAT',
            '100% Satisfaction Guarantee'
          ]
        }
      ]
    },
    'mobile-apps': {
      title: 'Mobile App Development',
      image: app,
      description: 'Native and cross-platform mobile applications for iOS and Android. We create intuitive, feature-rich apps that engage users and drive business growth.',
      features: [
        'iOS Development',
        'Android Development',
        'Cross-platform Solutions',
        'App Store Publishing'
      ],
      packages: []
    },
    /* Removed duplicate digital-marketing service - using social-media-marketing instead */
    /* Removed duplicate content-writing service - using web-content-writing instead */
  };

  const services = [
    { id: 'logo-design', name: 'Logo Design' },
    { id: 'web-designing', name: 'Web Designing' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'ecommerce', name: 'E-commerce Development' },
    { id: 'mobile-apps', name: 'Mobile App Development' },
    { id: 'seo', name: 'SEO Services' },
    { id: 'social-media-marketing', name: 'Social Media Marketing' },
    { id: 'web-content-writing', name: 'Web Content Writing' }
  ];

  const handleServiceClick = (serviceId) => {
    setActiveService(serviceId);
  };

  const currentService = servicesData[activeService];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  return (
    <div className="service-details-page">
      {/* Hero Section */}
      <section className="hero-section">
        <video 
          className="hero-video" 
          autoPlay 
          muted 
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Service Details</h1>
            <p>Comprehensive digital solutions tailored to your business needs</p>
            <div className="breadcrumb">
              <span>Home</span>
              <span>/</span>
              <span>Service Details</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="service-details-section">
        <div className="container">
          <div className="service-details-layout">
            {/* Left Sidebar */}
            <div className="service-sidebar">
              <div className="service-list">
                <h3>Services</h3>
                <ul>
                  {services.map((service) => (
                    <li key={service.id}>
                      <button
                        className={`service-item ${activeService === service.id ? 'active' : ''}`}
                        onClick={() => handleServiceClick(service.id)}
                      >
                        <span className="service-name">{service.name}</span>
                        <i className="fas fa-angle-right"></i>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="contact-box">
                <h3>Contact with us for any advice</h3>
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <p>Need help? Talk to an expert</p>
                <a href="tel:+15852018866" className="contact-phone">+1 (585) 201-8866</a>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="service-content">
              <h1 className="service-title">{currentService.title}</h1>
              
              <div className="service-image">
                <img 
                  src={currentService.image} 
                  alt={currentService.title} 
                  style={activeService === 'web-content-writing' 
                    ? { height: '26rem', width: '100%',  } 
                    : {}}
                />
              </div>

              <div className="service-overview">
                <h2>Service Overview</h2>
                <p>{currentService.description}</p>
                
                <h3>What you get:</h3>
                <ul>
                  {currentService.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section">
        <div className="container">
          <h3 className="packages-title">Package</h3>
          {currentService.packages.length > 0 ? (
            <div className="packages-grid">
              {currentService.packages.map((pkg, index) => (
                <div key={index} className="package-card-red">
                  <h4 className="package-title">{pkg.name}</h4>
                  <div className="package-price">
                    {pkg.originalPrice && (
                      <span className="original-price">{pkg.originalPrice}</span>
                    )}
                    <span className="current-price">{pkg.price}</span>
                  </div>
                  <ul className="package-features">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>✔ {feature}</li>
                    ))}
                  </ul>
                  <div className="package-actions">
                    <Link to="/contact" className="btn btn-light">Order Now</Link>
                    <button 
                      className="btn btn-light share-link-btn"
                      onClick={() => copyToClipboard(`${window.location.origin}/service-details#${pkg.name.toLowerCase().replace(/\s+/g, '-')}`)}
                    >
                      Share Link
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-packages-section">
              <div className="contact-cta">
                <h4>Custom App Development Solutions</h4>
                <p>Get a personalized quote for your app development project. Our team will analyze your requirements and provide a custom solution tailored to your needs.</p>
                <div className="cta-features">
                  <div className="cta-feature">
                    <i className="fas fa-mobile-alt"></i>
                    <span>iOS & Android Development</span>
                  </div>
                  <div className="cta-feature">
                    <i className="fas fa-gamepad"></i>
                    <span>Game App Development</span>
                  </div>
                  <div className="cta-feature">
                    <i className="fas fa-code"></i>
                    <span>Cross-Platform Solutions</span>
                  </div>
                  <div className="cta-feature">
                    <i className="fas fa-cogs"></i>
                    <span>Custom Features & Integration</span>
                  </div>
                </div>
                <Link to="/contact" className="btn btn-primary contact-btn">
                  <i className="fas fa-phone"></i>
                  Get Custom Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default ServiceDetails; 