import React from 'react';
import "../styles/Projects.css"
import jeopardy from "../images/letsplayjeopardy.png"

const Projects = () => {
  return (
    <>
      <span id="projects" className="section-header">Projects</span>
      <hr className="rule" />

      <div className="col-1 project-container">
        <img className="project-img" alt="jeopardy" src={jeopardy}>

        </img>
        <div className="overlay">
          <div className="overlay-text">

          </div>
        </div>
      </div>
    </>
  )
}

export default Projects;