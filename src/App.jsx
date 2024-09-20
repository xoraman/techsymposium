// App.js
import React from 'react';
import Department from './components/Department';
import events from './components/Events';
import BubbleAnimation from './/BubbleAnimation'; // Import the BubbleAnimation component

const App = () => {
  const departments = [...new Set(events.map(event => event.department))];

  return (
    <div className="App">
      <BubbleAnimation /> {/* Add the BubbleAnimation component here */}
      {departments.map(department => (
        <Department 
          key={department}
          departmentName={department}
          events={events.filter(event => event.department === department)}
        />
      ))}
    </div>
  );
};

export default App;
