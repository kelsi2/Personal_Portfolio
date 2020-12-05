import React from 'react';
import Kelsi from "../images/Kelsi.png"
import "../styles/About.css"

export default function About() {
  return (
    <>
      <span id="about" className="about-me-header">About Me</span>
      <br/>
      <img src={Kelsi} alt="Kelsi"></img>
    </>
  )
}