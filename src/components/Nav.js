import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import "../styles/Nav.css"

export default function Nav() {
  return (
    <>
      <span className="nav">
        <Link smooth to="#top" id="nav-name" className="nav-link">Kelsi Proulx</Link>
        <Link className="nav-link" smooth to="#about">About</Link>
        <Link className="nav-link" smooth to="#projects">Projects</Link>
        <Link className="nav-link" smooth to="#experience">Experience</Link>
        <Link className="nav-link" smooth to="#education">Education</Link>
        <Link className="nav-link" smooth to="#footer">Contact</Link>
        <a className="nav-link" href="https://bit.ly/2JSIT3Y">Resume</a>
      </span>
    </>
  )
}