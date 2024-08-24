import React from 'react';
import './EventCard.css';

const EventCard = ({ image, name, fee, description }) => {
  return (
    <div className="event-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Fee: {fee}</p>
    </div>
  );
};

export default EventCard;
