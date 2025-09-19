import React from 'react';
import '../styles/StatsShowcaseSection.css';

const showcaseImages = [
  'https://via.placeholder.com/180x120?text=Work+1',
  'https://via.placeholder.com/180x120?text=Work+2',
  'https://via.placeholder.com/180x120?text=Work+3',
  'https://via.placeholder.com/180x120?text=Work+4',
  'https://via.placeholder.com/180x120?text=Work+5',
];

const StatsShowcaseSection = () => {
  return (
    <section className="stats-showcase-section">
      <div className="stats-block">
        <div className="big-number">86900+</div>
        <div className="stats-desc">Projects completed by our team of web designers and developers</div>
      </div>
      <div className="showcase-title">Work showcase</div>
      <div className="showcase-grid">
        {showcaseImages.map((img, idx) => (
          <div className="showcase-item" key={idx}>
            <img src={img} alt={`Work ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsShowcaseSection; 