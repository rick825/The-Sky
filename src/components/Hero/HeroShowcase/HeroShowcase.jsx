import React from 'react';
import './HeroShowcase.css';
import { FaStar, FaBullhorn } from 'react-icons/fa';
import { PiMonitorBold } from 'react-icons/pi';

const HeroShowcase = () => {
  return (
    <div className="hero-visual">
  <div className="dot-grid dot-top-left" />
   <div className="dot-grid dot-bot-left" />
  <div className="dot-grid dot-top-right" />
  <div className="blob-bg " />
  <img
    src="https://res.cloudinary.com/dqg8b5o90/image/upload/v1748171772/ChatGPT_Image_May_25__2025__04_43_12_PM-removebg-preview_jcuk0i.png"
    alt="Hero"
    className="hero-img fade-in"
  />

  <div className="floating-card card-top-left fade-in-float">
    <PiMonitorBold />
    <div>
      <h4>2K+</h4>
      <span>Projects</span>
    </div>
  </div>

  <div className="floating-card card-top-right fade-in-float">
    <FaStar />
    <div>
      <h4>4.8</h4>
      <span>Satisfaction</span>
    </div>
  </div>

  <div className="floating-card card-bottom fade-in-float">
    <FaBullhorn />
    <div>
      <h4>Marketing Expert</h4>
      <span>6+ Years</span>
    </div>
  </div>
</div>

  );
};

export default HeroShowcase;
