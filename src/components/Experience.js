import React from "react";
import "../styles/Experience.css"

const Experience = () => {
  return (
    <>
      <span id="experience" className="section-header">Experience</span>
      <hr className="rule" />

      <div className="content">
        <div className="col">
          <h3 className="work-header">Program Assistant</h3>
          <h4 className="work-header">The University of British Columbia</h4>
          <h5 className="work-header">June 2019 - April 2020</h5>
          <ul className="experience-content">
            <li>Co-managed department website using WordPress and Wiki Pages</li>
            <li>Designed department signage using Adobe Illustrator</li>
            <li>Catalogued, processed, and maintained technical equipment for lending</li>
          </ul>
        </div>

        <div className="col">
          <h3 className="work-header">Library Clerk II</h3>
          <h4 className="work-header">Burnaby Public Library</h4>
          <h5 className="work-header">October 2016 - June 2019</h5>
          <ul className="experience-content">
            <li>Created and reviewed patron records in a library database</li>
            <li>Provided customer service to various community groups including families and seniors</li>
            <li>Assisted with community outreach services</li>
          </ul>
        </div>

        <div className="col">
          <h3 className="work-header">Public Services Library Technician</h3>
          <h4 className="work-header">Douglas College</h4>
          <h5 className="work-header">May 2016 - July 2017</h5>
          <ul className="experience-content">
            <li>Created patron records in a library database</li>
            <li>Circulated library materials using Sierra ILS</li>
            <li>Provided customer service to students and staff</li>
          </ul>
        </div>

        <div className="col">
          <h3 className="work-header">Computer Lab Assistant and Tutor</h3>
          <h4 className="work-header">Langara College</h4>
          <h5 className="work-header">September 2014 - June 2016</h5>
          <ul className="experience-content">
            <li>Assisted with computer troubleshooting</li>
            <li>Taught students to use Microsoft Office</li>
            <li>Provided instruction on scanning and saving documents</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Experience;