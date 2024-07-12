import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
      <div className="navbar-logo">
       
      </div>
      <div className={`navbarlinks ${isOpen ? 'show' : ''}`}>
        <Link to="/" className="nav-item" >Home</Link>
       
        <Link to="about" smooth={true} duration={500} className="nav-registration">About</Link>

        <Link to="skills" smooth={true} duration={500} className="nav-code">Skills</Link>
        <Link to="projects" smooth={true} duration={500} className="nav-item">Projects</Link>
        <Link to="internship" smooth={true} duration={500} className="nav-item">Internship</Link>
        <Link to="contact" smooth={true} duration={500} className="nav-item">Contact</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
    </nav>
    </div>
  );
};

export default Navbar;
