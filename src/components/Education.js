import React from "react";
import "../styles/Education.css";

const Education = () => {
  return (
    <>
      <span id="education" className="section-header">Education</span>
      <hr className="rule" />

      <div className="content">
        <div className="education-content">
          <h3 className="education-header">Web Development Diploma</h3>
          <h4 className="education-sub-header">Lighthouse Labs</h4>
          <h5 className="education-sub-sub-header">August - November 2020</h5>
        </div>

        <div className="education-content">
          <h3 className="education-header">Library and Information Technology Diploma</h3>
          <h4 className="education-sub-header">Langara College</h4>
          <h5 className="education-sub-sub-header">September 2014 - April 2016</h5>
        </div>

        <div className="education-content">
          <h3 className="education-header">Bachelor of Arts</h3>
          <h4 className="education-sub-header">The University of British Columbia</h4>
          <h5 className="education-sub-sub-header">September 2007 - April 2012</h5>
        </div>
      </div>
    </>
  )
}

export default Education