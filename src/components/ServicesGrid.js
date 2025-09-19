import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/ServicesGrid.css';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

const ServicesGrid = ({ services }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  // Debug logging
  console.log('ServicesGrid received services:', services);
  console.log('Number of services:', services?.length);
  console.log('Services type:', typeof services);
  console.log('Services is array:', Array.isArray(services));

  // Validate services data
  const validServices = services?.filter(service => 
    service && 
    service.id && 
    service.title && 
    service.description && 
    service.icon && 
    service.link
  ) || [];

  console.log('Valid services:', validServices);
  console.log('Valid services length:', validServices.length);

  // If no valid services, show a test service
  const servicesToRender = validServices.length > 0 ? validServices : [
    {
      id: 'test',
      title: 'Test Service',
      description: 'This is a test service to check rendering',
      icon: faBullseye,
      link: '/test'
    }
  ];

  return (
    <section className="services-grid-section">
      <div className="container">
        <div className="services-header" data-aos="fade-down">
          <h2>Our Services</h2>
          <p>Comprehensive digital solutions to help your business grow</p>
        </div>
        
        <div className="services-grid">
          {servicesToRender.map((service, idx) => {
            console.log(`Rendering service ${idx}:`, service);
            if (!service || !service.id) {
              console.error('Invalid service:', service);
              return null;
            }
            return (
              <div key={service.id} className="service-card" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="service-icon">
                  {service.icon ? (
                    <FontAwesomeIcon icon={service.icon} />
                  ) : (
                    <span>📱</span>
                  )}
                </div>
                <div className="service-content">
                  <h3>{service.title || 'Service Title'}</h3>
                  <p>{service.description || 'Service description'}</p>
                  <div className="service-button">
                    <Button 
                      href={service.link || '#'} 
                      variant="style-three" 
                      size="small"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;