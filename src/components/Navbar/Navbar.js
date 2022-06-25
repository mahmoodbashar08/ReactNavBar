import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">logo</NavLink>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/service">service</NavLink>
        </li>
        <li>
          <NavLink to="/Testimonial">Testimonial</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
