import React from "react";
import "../styles/Education.css";

const Education = () => {
  return (
    <>
      <span id="education" className="section-header">Education</span>
      <hr className="rule" />

      <div className="content">
          <h3 className="work-header">Web Development Diploma</h3>
          <h4 className="work-header">Lighthouse Labs</h4>
          <h5 className="work-header">August - November 2020</h5>
          <p className="education-text">Focused heavily on JavaScript and React, I built seven projects throughout the bootcamp. Topics included NodeJS, PSQL, HTML, CSS, Ruby on Rails, and dug into topics like best practices, clean code, and algorithms. Since graduation I haven't stopped building on the skills Lighthouse taught me.</p>

          <h3 className="work-header">Library and Information Technology Diploma</h3>
          <h4 className="work-header">Langara College</h4>
          <h5 className="work-header">September 2014 - April 2016</h5>
          <p className="education-text">Langara College was where I first got real exposure to development in the form of HTML and CSS. This was only a small part of the library work I studied, but it was the start of a journey that ended with a true passion for development and desire to learn everything I can!</p>

          <h3 className="work-header">Bachelor of Arts</h3>
          <h4 className="work-header">The University of British Columbia</h4>
          <h5 className="work-header">September 2007 - April 2012</h5>
          <p className="education-text">My Bachelor of Arts was not tech related, this was before I found my passion for development! However, it taught me critical thinking skills that planted the roots for becoming the developer I am today. This was where I learned to think and problem solve in new ways.</p>
      </div>
    </>
  )
}

export default Education