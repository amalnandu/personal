
import React from 'react';
import '../styles/about.css';
import profile from '../amalbg.png'; // Add your profile image

const About = () => {
  return (


<section id="about">

    <div className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={profile} alt="Amal Ganesh" />
        </div>
        <div className="about-text">
          <p>
            Hi, I'm Amal Ganesh, a passionate computer science engineer and tech enthusiast. I have a keen interest in software development, and I love creating innovative solutions to complex problems. My journey in the tech world started with a curiosity for how things work, and it has led me to explore various domains including web development, mobile app development, and artificial intelligence.
          </p>
          <p>
            In my free time, I enjoy experimenting with new technologies, contributing to open-source projects etc. I'm always eager to learn and grow, and I'm excited to see where my passion for technology will take me next.
          </p>
          <p>
            Feel free to explore my portfolio to see some of the projects I've worked on. If you'd like to get in touch, don't hesitate to reach out!
          </p>
        </div>
      </div>
    </div>

    </section>
  );
};

export default About;

