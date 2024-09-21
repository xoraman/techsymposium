import React from 'react'
import Department from './Department';
import events from './Events';
import Sponsors from './Sponsors';
import '../App.css'; 
const Home = () => {
    const departments = [...new Set(events.map(event => event.department))];
    const sponsors = [
      { name: "Sponsor 1", logo: "src\assets\sp1.png" },
      { name: "Sponsor 2", logo: "path/to/logo2.png" },
      { name: "Sponsor 3", logo: "path/to/logo3.png" },
      // Add more sponsors as needed
    ];
    return (
      
      <div className="App">
        <center>
        {departments.map(department => (
          <Department 
            key={department}
            departmentName={department}
            events={events.filter(event => event.department === department)}
          />
        ))}
    </center>
        <br></br>
        <Sponsors sponsors={sponsors} />
    
      </div>
  )
}

export default Home
