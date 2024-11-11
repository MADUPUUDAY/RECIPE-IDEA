import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Recipe App</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/recipes">Recipes</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
