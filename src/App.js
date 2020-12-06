import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";

export default function App() {
 return (
  <Router className="app">
    <Nav />
    <Home />
    <About />
    <Projects />
    {/* TODO: ADD FOOTER WITH CONTACT INFO AND SOCIAL MEDIA */}
  </Router>
 )
}
