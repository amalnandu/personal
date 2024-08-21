import React from 'react';
import '../styles/skills.css';
import java from '../svg/java-svgrepo-com.svg';
import python from '../svg/python-svgrepo-com.svg';
// import js from '../svg/js-svgrepo-com.svg';
// import django from '../svg/django-svgrepo-com.svg';
import flutter from '../svg/flutter-svgrepo-com.svg';
import github from '../svg/github-142-svgrepo-com.svg';
import git from '../svg/git-svgrepo-com.svg';
import css from '../svg/css-3-svgrepo-com.svg';
import firebase from '../svg/firebase-svgrepo-com.svg';

import linux from '../svg/linux.svg';
import html from '../svg/html_logo.svg';

const Skills = () => {
  return (

    <section id="Skills">

  
    <div className="skill-outer">
      <div className="skill-head">
        <h2>Skills</h2>
      </div>
      <div className="skill-body">
        <div className="image-container">
          <img src={java} alt="Java" />
          <div className="hover-text">Java</div>
        </div>
        <div className="image-container">
          <img src={python} alt="Python" />
          <div className="hover-text">Python</div>
        </div>
        {/* <div className="image-container">
          <img src={js} alt="JavaScript" />
          <div className="hover-text">JavaScript</div>
        </div> */}
        {/* <div className="image-container">
          <img src={django} alt="Django" />
          <div className="hover-text">Django</div>
        </div> */}
        <div className="image-container">
          <img src={flutter} alt="Flutter" />
          <div className="hover-text">Flutter</div>
        </div>
        <div className="image-container">
          <img src={github} alt="GitHub" />
          <div className="hover-text">GitHub</div>
        </div>
        <div className="image-container">
          <img src={git} alt="Git" />
          <div className="hover-text">Git</div>
        </div>
        <div className="image-container">
          <img src={css} alt="CSS" />
          <div className="hover-text">CSS</div>
        </div>
        <div className="image-container">
          <img src={firebase} alt="Firebase" />
          <div className="hover-text">Firebase</div>
        </div>

        {/* ///// */}
        <div className="image-container">
          <img src={linux} alt="Linux" />
          <div className="hover-text">Linux</div>
        </div>
        <div className="image-container">
          <img src={html} alt="html" />
          <div className="hover-text">HTML</div>
        </div>
        
      </div>
    </div>
    </section>
  );
};

export default Skills;
