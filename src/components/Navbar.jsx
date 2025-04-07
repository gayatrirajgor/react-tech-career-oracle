import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><NavLink to="/" end>Oracle</NavLink></li>
        <li><NavLink to="/guidance">Guidance</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/interview">Interview</NavLink></li>
        <li><NavLink to="/history">Journal</NavLink></li>
        <li><NavLink to="/settings">Settings</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;