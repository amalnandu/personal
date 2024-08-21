
import "../App.css";
import "../styles/nav.css"



function Navbar() {
  return (
    <div className="navbar">

      <div className="nav-left">
      <a href="#home">AMAL GANESH  </a>
      </div>
     <div className="nav-right">
   
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li> 
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Education">Education</a></li>
          
         
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
  
     </div>
    </div>
  );
}

export default Navbar;
