import "./App.css";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";

import Skills from "./components/skills.jsx";

import Contact from "./components/contact.jsx";
import Education from "./components/education.jsx";
import Projects from './components/projects.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <About />
    
      <Skills />
  <Projects/>
      <Education />

      <Contact />
     
    </>
  );
}

export default App;
