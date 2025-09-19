import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/ClientsSection.css';

const clients = [
  { link: 'https://www.google.com/', img: require('../assets/images/google.png'), alt: 'Google' },
  { link: 'https://www.trustpilot.com/', img: require('../assets/images/trustpilot.png'), alt: 'Trustpilot' },
  { link: 'https://clutch.co/', img: require('../assets/images/clutch.png'), alt: 'Clutch' },
  { link: 'https://www.walmart.com/', img: require('../assets/images/walmart.png'), alt: 'Walmart' },
  { link: 'https://www.spotify.com/', img: require('../assets/images/spotify.png'), alt: 'Spotify' },
];

const ClientsSection = () => (
  <section className="clients-section">
    <div className="auto-container">
      <div className="sponsors-outer sponsors-modern">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 1, disableOnInteraction: false }}
          speed={6000}
          breakpoints={{
            0: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          style={{ width: '100%' }}
        >
          {clients.map((client, idx) => (
            <SwiperSlide key={idx} className="slide-item">
              <a href={client.link} target="_blank" rel="noopener noreferrer">
                <img src={client.img} alt={client.alt} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </section>
);

export default ClientsSection; 