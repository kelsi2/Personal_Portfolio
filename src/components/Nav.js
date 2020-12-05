import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import "../styles/Nav.css"

export default function Nav() {
  return (
    <>
      <span className="nav">
        <NavHashLink smooth to="/#top" id="nav-name" className="nav-link">Kelsi Proulx</NavHashLink>
        <NavHashLink className="nav-link" smooth to="/#about">About</NavHashLink>
        <NavHashLink className="nav-link" smooth to="#">Skills</NavHashLink>
        <NavHashLink className="nav-link" smooth to="#">Projects</NavHashLink>
        <NavHashLink className="nav-link" smooth to="#">Experience</NavHashLink>
        <NavHashLink className="nav-link" smooth to="#">Education</NavHashLink>
        <NavHashLink className="nav-link" smooth to="#">Resume</NavHashLink>
        {/* TODO: ADD SOCIAL MEDIA AND CONTACT OPTIONS */}
      </span>
    </>
  )
}