import React from "react";
import '../styles/Home.css';
import '../styles/Button.scss';
import { HashLink as Link } from "react-router-hash-link";

export default function Home() {
  return (
  <>
    <div className="canvas">
      <div className="home-content">
        <div id="container" className="col">
            <h1 className="name">Kelsi <br/> Proulx</h1>
            <h1 className="title">Full Stack <br/> Web Developer</h1>
        </div>
        <span id="btn-container" className="col">
          <Link to="#about" className="learn-btn learn-more">
            Find out More
            <br/>
            <div className="bouncing-arrow">
              <i className="fas fa-angle-double-down"></i>
            </div>
          </Link>
        </span>
      </div>
    </div>
  </>
  );
}