import React from 'react';
import '../styles/projects.css';

const projectData = [
  {
    title: 'Lenovo Conservation Mode',
    description: 'A shell-based command to switch between conservation mode and normal mode in Lenovo laptops running Linux.',
    image: 'https://images.unsplash.com/photo-1675901871341-dd6c573d0600?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://github.com/amalnandu/lenovo-conservation-mode',
  },
  {
    title: 'Budgety',
    description: 'A simple Flutter app to track my credit and debit. Backed by Firebase.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVkZ2V0JTIwbW9uZXl8ZW58MHx8MHx8fDA%3D',
    link: 'https://github.com/amalnandu/budgety',
  },
  {
    title: 'Portfolio Website',
    description: 'The source code for the website that you are currently viewing.',
    image: 'https://images.unsplash.com/photo-1711659829586-fa5d64ac9b7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGNvZGV8ZW58MHx8MHx8fDA%3D',
    link: 'https://github.com/amalnandu/personal',
  },
  

];

const ProjectItem = ({ project }) => (
  <div className="project-item">
    <img src={project.image} alt={project.title} className="project-image" />
    <div className="project-info">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project
      </a>
    </div>
  </div>
);

const Projects = () => (
  <section id="Projects">
    <div className="projects-section">
      <div className="projects-title">
        <h2>Projects</h2>
      </div>
      <div className="projects-container">
        {projectData.map((project, idx) => (
          <ProjectItem project={project} key={idx} />
        ))}
      </div>
      <div className="more-projects">
        <p>More projects loading...</p>
      </div>
    </div>
  </section>
);

export default Projects;
