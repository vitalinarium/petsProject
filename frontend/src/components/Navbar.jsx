import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
      <div>
        <h2>My Component</h2>
        <NavLink exact to="/">Home</NavLink>
        <br />
        <NavLink exact to="/login">Login</NavLink>
        <br />
        <NavLink exact to="/animals">Animals</NavLink>
        <br />
        <NavLink exact to="/blog">Blog</NavLink>
      </div>
    );
  };

export default Navbar;
