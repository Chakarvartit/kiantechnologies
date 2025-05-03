import React from 'react';
import { Link } from 'react-router-dom'; // ✅ import Link
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Kian Technologies</div>
      <nav className="nav">
        <ul>
          {/* Home - navigate to home */}
          <li>
            <Link to="/" className="nav-link">Home</Link> 
          </li>

          {/* About Us - separate page */}
          <li>
            <Link to="/about" className="nav-link">About Us</Link> 
          </li>
          <li>
            <Link to="/Courses" className="nav-link">Courses</Link> 
          </li>
          <li>
            <Link to="/Contact" className="nav-link">Contact</Link> 
          </li>
          <li>
            <Link to="/Blog" className="nav-link">Pages</Link> 
          </li>
          <li>
            <Link to="/Register" className="nav-link">Register</Link> 
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
