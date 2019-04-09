import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";

// TODO: Highlight these links

export default function NavBar() {
  return (
    <div>
      <NavLink to="/RegistrationPage" className="navlink" activeClassName="selected">Registration Page</NavLink>{" "}
      <NavLink to="/LoginPage" className="navlink" activeClassName="selected">Login Page</NavLink>{" "}
      <NavLink to="/UserHomePage" className="navlink" activeClassName="selected">User Home Page</NavLink>
    </div>
  )
}