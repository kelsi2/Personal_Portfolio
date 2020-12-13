import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "../styles/NavLink.css";

const NavLinks = () => {
  return (
    <>
      <span className="nav-links">
        <Link className="nav-link" smooth to="#">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </Link>
        <Link className="nav-link" smooth to="#about">
          <i className="fas fa-address-card"></i>
          <span>About</span>
        </Link>
        <Link className="nav-link" smooth to="#projects">
          <i className="fas fa-tasks"></i>
          <span>Projects</span>
        </Link>
        <Link className="nav-link" smooth to="#experience">
          <i className="fas fa-briefcase"></i>
          <span>Experience</span>
        </Link>
        <Link className="nav-link" smooth to="#education">
          <i className="fas fa-graduation-cap"></i>
          <span>Education</span>
        </Link>
        <Link className="nav-link" smooth to="#footer">
          <i className="fas fa-envelope"></i>
          <span>Contact</span>
        </Link>
        <a className="nav-link" href="https://bit.ly/2JSIT3Y">
          <i className="fas fa-file-pdf"></i>
          <span>Resume</span>
        </a>
      </span>
    </>
  )
}

export default NavLinks;