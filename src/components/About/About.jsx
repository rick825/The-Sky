import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <>
      {/* Top Section */}
      <section id="main">
        <div className="main">
          <div className="mainleft maincont fade-in">
            <div className="mainleftcont">
              <div className="head">
                <h2>Hello, I am <span>Akash</span></h2>
              </div>
              <div className="para">
                <p>
                  I'm a passionate and creative web developer with experience in building responsive websites from scratch using HTML5, CSS3, JavaScript, NodeJS, Express and MongoDB.
                </p>
                <p>
                  My goal is to create user-friendly applications that deliver an exceptional customer experience.
                </p>
              </div>
              <div className="button">
                <a href="#about">
                  More About Me ↗
                </a>
                <a href="#projects">
                  Explore My Work ↗
                </a>
              </div>
            </div>
          </div>

          <div className="mainright maincont fade-in">
            <div className="mainimg">
              <img src="https://rick825.github.io/Portfolio/images/main.png" alt="Akash" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section id="main-bot ">
        <div className="main-bot">
          <div className="main-bot-left main-bot-cont fade-in delay-1">
            <div className="mainnav">
              <div className="line"></div>
              <div className="navsocial">
                <ul className="navul">
                  <li className="navitem">
                    <a
                      href="https://www.linkedin.com/in/akashkumardassky/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                    </a>
                  </li>
                  <li className="navitem">
                    <a
                      href="https://github.com/rick825"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                  </li>
                  <li className="navitem">
                    <a
                      href="https://www.instagram.com/t_he_s_ky"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="main-bot-right main-bot-cont fade-in delay-1">
            <div className="mainbotdiv">
              <div className="mbd mdb1">
                <div className="mbd-head">
                  <h2><span>S</span>pecialised Skills ↓</h2>
                </div>
                <div className="mbd-icon">
                  <FontAwesomeIcon icon={faHtml5} size="2x" />
                  <FontAwesomeIcon icon={faCss3Alt} size="2x" />
                  <FontAwesomeIcon icon={faJs} size="2x" />
                  <FontAwesomeIcon icon={faReact} size="2x" />
                  <FontAwesomeIcon icon={faNodeJs} size="2x" />
                </div>
                <div className="mbd-para">
                  <p>I am mastering these skills over the last few years and am confident about delivering the best out of it.</p>
                </div>
                <div className="mbd-button">
                  <a href="#">
                    <span>View More</span> ↗
                  </a>
                </div>
              </div>

              <div className="mbd mdb1">
                <div className="mbd-head">
                  <h2><span>S</span>ervices ↓</h2>
                </div>
                <div className="mbd-list">
                  <ul>
                    <li>Web Designing & Development</li>
                    <li>Full Stack Web Development</li>
                    <li>Ecommerce Website Designing & Development</li>
                  </ul>
                </div>
                <div className="mbd-button">
                  <a href="#">
                    <span>View More</span> ↗
                  </a>
                </div>
              </div>

              <div className="line line2"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
