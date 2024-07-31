import React from 'react';
import '../styles/hero.css';
import spider from '../spider.png';
// import amal from '../amalbg.png';

const Hero = () => {
  return (

<section id="home">


    <div className="outer">
      <div className="hero">
        <div className="hero-content">
          <div className="spiderman">
            <img src={spider} alt="Spiderman" />
          </div>
          <h1 className="hero-title">Hi, I'm Amal Ganesh!</h1>
          <p className="hero-subtitle">
            Welcome to my website! <br />
         
          </p>
          <div className="amal">
            {/* <img src={amal} alt="Amal Ganesh" /> */}
          </div>
          <a 
    href="https://drive.google.com/file/d/1m9o8nVl8eMdVTlJudk10nRmfyhsODZx1/view?usp=sharing"  
    rel="noopener noreferrer"
    className="hero-button"
>
    Download Resume
</a>
        </div>
      </div>
    </div>

    </section>
  );
};

export default Hero;
