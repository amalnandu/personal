import "./App.css";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
// import ExperienceTimeline from "./components/experience.jsx";
import Skills from './components/skills.jsx'
// import ContactMe from './components/contact_mr.jsx';
import Contact from "./components/contact.jsx";
import Education from './components/education.jsx';


function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <About />
      {/* <ExperienceTimeline/> */}
      <Skills/>

<Education/>

<Contact/>

      {/* <ContactMe/> */}
    </>
  );
}

export default App;
