import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import SidebarData from "./SidebarData";
import "../styles/ResponsiveNav.css";

const ResponsiveNav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
      <div id={sidebar ? "side-nav-active" : "navbar"}>
        <Link to="#" className={sidebar ? "hidden-bars" : "menu-bars"}>
          <i className="fas fa-bars" onClick={showSidebar}></i>
        </Link>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <i className="fas fa-times"></i>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
            <li className="nav-text nav-link">
              <a href="https://bit.ly/2JSIT3Y">
                <i className="fas fa-file-pdf"></i>
                <span>Resume</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default ResponsiveNav;