import React, { useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/TestimonialSection.css';

const testimonials = [
  {
    img: require('../assets/images/testi-5.jpg'),
    name: 'Emma Rivera',
    position: 'Founder, Bloom & Root',
    company: 'eCommerce Skincare',
    text: 'Smart Web Experts launched our Elite Website and eCommerce setup—within weeks, product pages converted better and sales increased.',
    service: 'E-commerce'
  },
  {
    img: require('../assets/images/testi-2.jpg'),
    name: 'Jason Patel',
    position: 'CEO, CourseHive',
    company: 'EdTech SaaS',
    text: 'The SEO plan was clear and consistent. We moved onto page one for priority keywords and saw steady growth in qualified traffic.',
    service: 'SEO'
  },
  {
    img: require('../assets/images/testi-3.jpg'),
    name: 'Lauren Kim',
    position: 'Co-owner, ModernNest Interiors',
    company: 'Home Services',
    text: 'Our new website looks great and loads fast. Inquiries went up and clients said it was easier to contact us.',
    service: 'Basic Web'
  },
  {
    img: require('../assets/images/testi-4.jpg'),
    name: 'Marcus Flynn',
    position: 'Marketing Director, Gearloop',
    company: 'Retail',
    text: 'They rebuilt our paid and social strategy with simple dashboards. We lowered cost per lead and scaled our ad budget confidently.',
    service: 'Social Media'
  },
  {
    img: require('../assets/images/testi-1.jpg'),
    name: 'Nia Owens',
    position: 'Founder, Bookwise',
    company: 'Online Tutoring',
    text: 'Marketing automation now follows up for us—more booked calls and less manual work.',
    service: 'Marketing Automation'
  }
];

const TestimonialSection = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="testimonial-section" id="testimonials">
      <div className="bg bg-pattern-5"></div>
      <div className="auto-container">
        <div className="sec-title text-center" data-aos="fade-down">
          <h2>Client Testimonials</h2>
          <div className="title-text">
            Trusted by small businesses and startups across eCommerce, SaaS, home services, and retail.
          </div>
        </div>
        
        <div className="testimonial-carousel-wrapper" data-aos="fade-up">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="testimonial-carousel"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="testimonial-block" data-aos="zoom-in" data-aos-delay={idx * 150}>
                  <div className="inner-box">
                    <div className="quote-icon">
                      <FaQuoteLeft />
                    </div>
                    <div className="text">{t.text}</div>
                    <div className="info-box">
                      <figure className="image">
                        <img src={t.img} alt={t.name} />
                      </figure>
                      <div className="client-info">
                        <h4 className="name">{t.name}</h4>
                        <span className="position">{t.position}</span>
                        <span className="company">{t.company}</span>
                        <div className="service-tag">
                          <span className="service-text">{t.service}</span>
                          <a href="/services" className="view-package">[View package]</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev custom-nav-btn" onClick={goPrev}>
            <FaChevronLeft />
          </button>
          <button className="swiper-button-next custom-nav-btn" onClick={goNext}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;