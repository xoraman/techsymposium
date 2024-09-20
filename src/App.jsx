import React from 'react';
import Department from './components/Department';
import events from './components/Events';
import BubbleAnimation from './components/BubbleAnimation'; 
import './App.css'; 

const App = () => {
  const departments = [...new Set(events.map(event => event.department))];

  return (
    <div className="App">
      <BubbleAnimation />
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
