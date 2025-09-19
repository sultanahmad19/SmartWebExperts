import React from 'react';
import '../styles/TeamSection.css';

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-content">
        <h2>Experienced designers & developers</h2>
        <ul>
          <li><strong>Passion-Driven</strong> – Our team loves what they do and it shows in every project.</li>
          <li><strong>Collaborative Approach</strong> – We work closely with you to bring your vision to life.</li>
          <li><strong>Quality-Driven Tasks</strong> – We focus on delivering the best results, every time.</li>
        </ul>
      </div>
      <div className="team-images">
        {/* Replace with your own images if desired */}
        <img src="https://via.placeholder.com/300x200?text=Team+1" alt="Team 1" className="team-img main" />
        <img src="https://via.placeholder.com/180x120?text=Team+2" alt="Team 2" className="team-img sub" />
      </div>
    </section>
  );
};

export default TeamSection; 