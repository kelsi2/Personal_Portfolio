import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarData from "./SidebarData";
import Logo from "./Logo"
import "../styles/ResponsiveNav.css";

const ResponsiveNav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
      <div id="navbar">
        <Logo />
        <Link to="#" className="menu-bars">
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
          </ul>
        </nav>
      </div>
    </>
  )
}

export default ResponsiveNav;