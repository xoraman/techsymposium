import React from 'react';
import EventCard from './EventCard';

const Department = ({ departmentName, events }) => {
  return (
    <div className="department">
      <h2>{departmentName}</h2>
      <div className="events">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Department;
