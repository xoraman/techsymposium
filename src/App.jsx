import React from 'react';
import Department from './components/Department';
import events from './components/Events';

const App = () => {
  const departments = [...new Set(events.map(event => event.department))];

  return (
    <div className="App">
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
