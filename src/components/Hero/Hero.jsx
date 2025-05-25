import React from 'react';
import './Hero.css';
import {
  FaUsers, FaChartLine, FaCheckCircle, FaStar, FaClock, FaLaptopCode
} from 'react-icons/fa';
import HeroShowcase from './HeroShowcase/HeroShowcase';
import DecoratedLines from '../svg/DecoratedLines';
import WavyLine from '../svg/WavyLines';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-text fade-in delay-1">
          <p className="hero-subtitle">Elevate Your Online Presence</p>
          <h1>
            <span>Custom Web Solutions</span> that Drive Results
          </h1>
          <p>
            We help brands grow through tailored websites, intuitive UI/UX design, and intelligent digital marketing strategies. 
            Our solutions are built to captivate users, optimize performance, and convert visitors into loyal customers. 
            Whether you're launching a startup or scaling an enterprise, we turn your ideas into impactful digital experiences that drive measurable results.
          </p>

          <div className="hero-buttons fade-in delay-2">
            <a href="#contact" className="btn-primary">Get a Free Quote</a>
            <a href="#work" className="btn-secondary">See Our Work</a>
          </div>

          {/* Metrics */}
          <div className="hero-metrics fade-in delay-3">
            {[
              { icon: <FaUsers />, label: "15+ Clients", sub: "Worldwide" },
              { icon: <FaCheckCircle />, label: "98% Success Rate", sub: "Client Satisfaction" },
              { icon: <FaStar />, label: "Top Rated", sub: "by Clients" },
              { icon: <FaLaptopCode />, label: "70+ Websites", sub: "Launched Successfully" },
              { icon: <FaChartLine />, label: "200% ROI", sub: "With SEO & Ads" },
              { icon: <FaClock />, label: "24/7 Support", sub: "Across Timezones" },
            ].map((item, idx) => (
              <div key={idx} className="metric-item">
                {item.icon}
                <div>
                  <h4>{item.label}</h4>
                  <span>{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <HeroShowcase />
      </div>

      {/* Decorative SVG */}
      <DecoratedLines />
    </section>
  );
};

export default Hero;
