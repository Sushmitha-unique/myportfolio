import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
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
       
        <Link to="/about" className="nav-registration">About</Link>

        <Link to="/skills" className="nav-code">Skills</Link>
        <Link to="/projects" className="nav-item">Projects</Link>
        <Link to="/internship" className="nav-item">Internship</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
    </nav>
    </div>
  );
};

export default Navbar;
