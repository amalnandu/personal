import React from 'react';
import '../styles/contact.css';
import github from '../github.png';
import mail from '../mail.png'
import linked from '../linkedin.png';



const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Lets be in touch..👋</h2>
        <p></p>
        <br />
  
        <div className="contact-links">
          <a href="https://github.com/amalnandu" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/amalganesh/" target="_blank" rel="noopener noreferrer">
            <img src={linked} alt="LinkedIn" />
          </a>
          <a href="mailto:amalnanduwork@gmail.com">
            <img src={mail} alt="Gmail" />
          </a>
          {/* Add more links as needed */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
