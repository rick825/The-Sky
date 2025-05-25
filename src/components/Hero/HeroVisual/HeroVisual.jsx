import React from 'react';
import './HeroVisual.css';
import { FaStar, FaUser } from 'react-icons/fa';
import { PiMonitorBold } from 'react-icons/pi';

const HeroVisual = () => {
  return (
    <div className="hero-visual-container">
      {/* Decorative blob background */}
      <div className="blob-background"></div>

      {/* Main Image */}
      <img
        src="https://rick825.github.io/Portfolio/images/main.png"
        alt="Profile"
        className="hero-profile-img"
      />

      {/* Floating Cards */}
      <div className="floating-card top-left">
        <PiMonitorBold />
        <div>
          <h4>2K+</h4>
          <span>Projects</span>
        </div>
      </div>

      <div className="floating-card top-right">
        <FaStar />
        <div>
          <h4>4.8</h4>
          <span>Satisfaction</span>
        </div>
      </div>

      <div className="floating-card bottom-center">
        <FaUser />
        <div>
          <h4>Product Designer</h4>
          <span>5 Years</span>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
