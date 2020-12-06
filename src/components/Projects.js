import React from 'react';
import "../styles/Projects.css"
import jeopardy from "../images/letsplayjeopardy.png"
import forkItAll from "../images/forkItAllHome.png"
import products from "../images/Products_page.png"
import scheduler from "../images/scheduler.png"
import decisionMaker from "../images/decisionMakerHome.png"

const Projects = () => {
  return (
    <>
      <span id="projects" className="section-header">Projects</span>
      <hr className="rule" />

      <div className="project-container">
        {/* Jeopardy */}
        <img className="project-img" alt="Jeopardy landing page" src={jeopardy}>

        </img>
        <div className="overlay">
          <div className="overlay-text">

          </div>
        </div>

          {/* Fork It All */}
          <img className="project-img" alt="Fork It All home screen" src={forkItAll}>

          </img>
          <div className="overlay">
            <div className="overlay-text">

            </div>
          </div>

          {/* Jungle */}
           <img className="project-img" alt="Jungle home screen" src={products}>

          </img>
          <div className="overlay">
            <div className="overlay-text">

            </div>
          </div>

          {/* Scheduler */}
           <img className="project-img" alt="Scheduler booking screen" src={scheduler}>

          </img>
          <div className="overlay">
            <div className="overlay-text">

            </div>
          </div>

          {/* Decision Maker */}
           <img className="project-img" alt="Decision Maker home screen" src={decisionMaker}>

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