import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react';
import './App.css'; 
import About from './components/About';
import Register from './components/Register';
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import Home from './components/Home';

const App = () => {
  // const departments = [...new Set(events.map(event => event.department))];

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <br></br>
        <br></br>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/reg" element={<Register/>}/>

        </Routes>
      </BrowserRouter>
            {/* <BubbleAnimation /> Add the BubbleAnimation */}
      
    </div>
  );
};

export default App;
