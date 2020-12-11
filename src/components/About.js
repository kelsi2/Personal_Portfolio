import React from 'react';
import Kelsi from "../images/Kelsi.png"
import "../styles/About.css"
import "../styles/App.css"

export default function About() {
  return (
    <>
      <span id="about" className="section-header">About Me</span>
      <hr className="rule" />
      <div className="content">
        <div className="col profile-img-container">
            <img className="profile-img" src={Kelsi} alt="Kelsi"></img>
        </div>
          <div className="col">
          <p className="about-text">
            <b>WHO I AM:</b> I am a fullstack web developer with a passion for frontend development. I work well on a team, have a strong work ethic, and the ability to complete any task assigned to me. I have advanced research and people skills from my background in library work.
          </p>
          <p className="about-text">
            <b>PASSION:</b> I am passionate about front-end web development and design. Any projects that allow me to express my creativity!
          </p>
          <p className="about-text">
            <b>STACK:</b> I enjoy working with CSS, React, and Vanilla JS.
          </p>
          <p className="about-text">
            <b>WHY I'M HERE:</b> I chose web development because I want a career that will allow me to continually learn, explore new things, and always be excited about what I do.
          </p>
        </div>
      </div>
    </>
  )
}