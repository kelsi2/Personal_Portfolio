import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About"

function App() {
 return (
   <Router>
     <Nav />
     <HashLink exact path="/#top" component={Home} />
     <HashLink path="/#about" component={About} />
    {/* TODO: ADD FOOTER WITH CONTACT INFO AND SOCIAL MEDIA */}
   </Router>
 )
}

export default App;
