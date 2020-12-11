import React, { useState } from "react";
import Logo from "./Logo";
import { HashLink as Link } from 'react-router-hash-link';

const NavLinks = () => {
  return (
    <>
      <span className="nav-links">
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

export default NavLinks;