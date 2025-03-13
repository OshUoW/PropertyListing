import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


// Define and export the Navbar component
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //the navigation bar
  return (
    <nav className={`navbar ${menuOpen ? 'show' : ''}`}>
      <Link to='/' className='navtitle'>Jays<span className='lg'>&</span>Properties</Link>
      <div className='menu-toggle' onClick={toggleMenu}>  
        ☰
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/properties">Properties</Link></li>
      </ul>
    </nav>
  );
}
