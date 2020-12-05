import React from 'react';
import Kelsi from "../images/Kelsi.png"
import "../styles/About.css"
import Form from "./Form"

export default function About() {
  return (
    <>
      <span id="about" className="about-me-header">Profile</span>
      <hr className="rule" />
      <div className="content">
        <div className="col">
          <span className="about-me">About Me</span>
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
        <div className="col img-align">
          <div className="img-container">
            <img className="profile-img" src={Kelsi} alt="Kelsi"></img>
          </div>
        </div>
        <div className="col">
          <Form />
          <div id="social-icons">
            <a className="social-icon" href="https://www.linkedin.com/in/kelsi-dev/"><i class="fab fa-linkedin-in"></i></a>
            <a className="social-icon" href="https://github.com/kelsi2"><i class="fab fa-github"></i></a>
            <a className="social-icon" href="https://twitter.com/KelsiProulx"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </>
  )
}