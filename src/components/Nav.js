import React from 'react';
import {Link} from "react-router-dom";
import "../styles/Nav.css"

export default function Nav() {
  return (
    <>
      <span className="nav">
        <Link className="nav-link" to="#">About</Link>
        <Link className="nav-link" to="#">Skills</Link>
        <Link className="nav-link" to="#">Projects</Link>
        <Link className="nav-link" to="#">Experience</Link>
        <Link className="nav-link" to="#">Education</Link>
        <Link className="nav-link" to="#">Resume</Link>
      </span>
    </>
  )
}