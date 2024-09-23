// Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Updated CSS for the new design

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>TechSymposium</h1> {/* Logo/Title */}
        </div>

        <nav className={`navbar ${isOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active-link">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active-link">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" activeClassName="active-link">
                Register
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {/* Hamburger Menu Icon */}
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
