// About.js
import React from 'react';
import './About.css'; // CSS for styling the About component

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About TechSymposium</h1>
        <p>
          TechSymposium is an annual technical event that brings together
          engineers, innovators, and tech enthusiasts from all over the world.
          We provide a platform for participants to showcase their talent,
          creativity, and technical skills in various fields like robotics,
          AI, software development, and more.
        </p>
      </div>

      <div className="about-content">
        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to foster innovation and collaboration among
            technology professionals and students, encouraging them to push the
            boundaries of what's possible. We aim to create an environment that
            celebrates creativity, curiosity, and learning.
          </p>
        </div>

        <div className="about-vision">
          <h2>Our Vision</h2>
          <p>
            We envision a world where technology is used as a force for good,
            solving global challenges and creating opportunities for everyone.
            TechSymposium aims to be a catalyst for change, inspiring the next
            generation of tech leaders and innovators.
          </p>
        </div>

        <div className="about-team">
          <h2>Meet Our Team</h2>
          <p>
            Our event is organized by a passionate group of students and
            faculty members from the Engineering Institute. With a shared
            commitment to innovation and excellence, our team works tirelessly
            to make TechSymposium a success every year. <br></br>
            <h2>Aman Patvegar | Harsh Patil </h2>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
