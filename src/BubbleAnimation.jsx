// BubbleAnimation.js
import React from 'react';
import './BubbleAnimation.css'; // Import the CSS file for bubble animation

const BubbleAnimation = () => {
  return (
    <div className="bubble-container">
      {[...Array(30)].map((_, index) => (
        <div key={index} className={`bubble bubble${index + 1}`}></div>
      ))}
    </div>
  );
};

export default BubbleAnimation;
