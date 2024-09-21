// Sponsors.js
import React from 'react';
import './Sponsors.css'; // Create a separate CSS file for styling

const Sponsors = ({ sponsors }) => {
  return (
    <div className="sponsors-container">
      <h2>Our Sponsors</h2>
      <div className="sponsor-logos">
        {sponsors.map((sponsor, index) => (
          <div className="sponsor-logo" key={index}>
            <img src="src\assets\sp1.png" alt={sponsor.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
