import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function App() {
 return (
  <Router className="app">
    <Nav />
    <Home />
    <About />
    <Projects />
    <Experience />
    <Education />
    {/* TODO: ADD FOOTER WITH CONTACT INFO AND SOCIAL MEDIA */}
  </Router>
 )
}
