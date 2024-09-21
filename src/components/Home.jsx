import React from 'react'
import Department from './Department';
import events from './Events';
import '../App.css'; 
const Home = () => {
    const departments = [...new Set(events.map(event => event.department))];

    return (
      <div className="App">
        {/* <BubbleAnimation /> Add the BubbleAnimation */}
        {departments.map(department => (
          <Department 
            key={department}
            departmentName={department}
            events={events.filter(event => event.department === department)}
          />
        ))}
      </div>
  )
}

export default Home
