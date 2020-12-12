import React from "react";
import jeopardy from "../images/letsplayjeopardy.png"
import forkItAll from "../images/forkItAllHome.png"
import products from "../images/Products_page.png"
import scheduler from "../images/scheduler.png"
import decisionMaker from "../images/decisionMakerHome.png"

const ProjectData = () => {
  return (
    <>
    <div className="project-container">
      {/* Jeopardy */}
      <div className="proj-img-container">
        <img className="project-img" alt="Jeopardy landing page" src={jeopardy} />
        <div className="overlay">
          <div className="overlay-text">
            <h1>Jeopardy Hackathon</h1>
            <p><a href="https://jeopardy-hackathon.netlify.app/">Live Version</a></p>
            <p><a href="https://github.com/kelsi2/Hack_the_Quiz_Platform_Hackathon">Github</a></p>
            <hr/>
            <p>Jeopardy game built for <a href="https://www.mintbean.io/meets">Mintbean JavaScript Hacks: Hack the Quiz Platform</a>.</p>
            <hr/>
            <p><b>Front-end: </b>React, Redux, React Router, Material UI, CSS, Axios</p>
            <hr/>
            <p><b>Project Dates: </b>November 13-18, 2020</p>
          </div>
        </div>
      </div>

        {/* Fork It All */}
        <div className="proj-img-container">
          <img className="project-img" alt="Fork It All home screen" src={forkItAll} />
          <div className="overlay">
            <div className="overlay-text">
              <h1>Fork It All</h1>
              <p><a href="https://fork-it-all.herokuapp.com/">Live Version</a></p>
              <p><a href="https://github.com/kelsi2/fork_it_all_backend">Back-end Repo</a></p>
              <p><a href="https://github.com/kelsi2/fork_it_all_frontend">Front-end Repo</a></p>
              <hr/>
              <p>My final project for Lighthouse Labs Web Development Bootcamp. A food website where users can create unique twists on recipes and find what they need quickly to start cooking!</p>
              <hr/>
              <p><b>Front-end: </b>React, React Router, React Bootstrap, SASS</p>
              <p><b>Back-end: </b>Ruby on Rails, Active Record, PSQL</p>
              <hr/>
              <p><b>Project Dates: </b>October 23 - November 5, 2020</p>
            </div>
          </div>
        </div>

        {/* Jungle */}
        <div className="proj-img-container">
          <img className="project-img" alt="Jungle home screen" src={products} />
          <div className="overlay">
            <div className="overlay-text">
              <h1>Jungle</h1>
              <p><a href="https://github.com/kelsi2/jungle">Github</a></p>
              <hr/>
              <p>A mini e-commerce app built with Rails.</p>
              <hr/>
              <p><b>Front-end: </b>CSS, Bootstrap</p>
              <p><b>Back-end: </b>Ruby on Rails, Active Record, PSQL</p>
              <p><b>Test: </b>RSpec, Capybara</p>
              <hr/>
              <p><b>Project Dates: </b>October 13-21, 2020</p>
            </div>
          </div>
        </div>

        {/* Scheduler */}
        <div className="proj-img-container">
          <img className="project-img" alt="Scheduler booking screen" src={scheduler} />
          <div className="overlay">
            <div className="overlay-text">
              <h1>Interview Scheduler</h1>
              <p><a href=" https://zealous-sinoussi-2e244a.netlify.app/">Live Version</a></p>
              <p><a href="https://github.com/kelsi2/scheduler">Github</a></p>
              <hr/>
              <p>A React application that allows users to book and cancel interviews.</p>
              <hr/>
              <p><b>Front-end: </b>React, Webpack, Babel</p>
              <p><b>Back-end: </b>Axios, PSQL, Express, Webpack</p>
              <p><b>Test: </b>Jest, Storybook, Cypress</p>
              <hr/>
              <p><b>Project Dates: </b>September 26 - October 7, 2020</p>
            </div>
          </div>
        </div>

        {/* Decision Maker */}
        <div className="proj-img-container">
          <img className="project-img" alt="Decision Maker home screen" src={decisionMaker} />
          <div className="overlay">
            <div className="overlay-text">
              <h1>Decision Maker</h1>
              <p><a href="https://github.com/kelsi2/decision-maker">Github</a></p>
              <hr/>
              <p>My midterm project for Lighthouse Labs Web Development Bootcamp. An app that allows users to create polls to share with friends and view the results.</p>
              <hr/>
              <p><b>Front-end: </b>SASS, EJS</p>
              <p><b>Back-end: </b>NodeJS, Express, jQuery, PSQL, JavaScript</p>
              <hr/>
              <p><b>Project Dates: </b>September 18 - 25, 2020</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectData;