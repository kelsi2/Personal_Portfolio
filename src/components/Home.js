import React from "react";
import '../styles/App.css';
import '../styles/Button.scss';
import {Link} from "react-router-dom";

export default function Home() {
  return (
  <>
    <div className="canvas">
      <div id="container">
          <h1 className="name">Kelsi <br/> Proulx</h1>
          <h1 className="title">Full Stack <br/> Web Developer</h1>
      </div>
      <span id="btn-container">
        <Link to="/#/about" className="learn-btn learn-more">
          Find out More
          <br/>
          <i className="fas fa-angle-double-right"></i>
          {/* TODO: FIND A WAY TO ANIMATE ARROW!!! */}
        </Link>
      </span>
    </div>
  </>
  );
}