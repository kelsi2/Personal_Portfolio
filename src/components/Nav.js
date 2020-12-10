import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import "../styles/Nav.css";
import useDocumentScrollThrottled from "../helpers/scrollFunc";

export default function Nav() {
  const [shouldHideNav, setShouldHideNav] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    
    setShouldShowShadow(currentScrollTop > 2);
    
    setTimeout(() => {
      setShouldHideNav(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? "shadow" : "";
  const scrollStyle = shouldHideNav ? "hidden" : "";

  return (
    <>
      <span id="navbar" className={`nav ${scrollStyle} ${shadowStyle}`}>
        <Link smooth to="#top" id="nav-name" className="nav-link">Kelsi Proulx</Link>
        <Link className="nav-link" smooth to="#about">About</Link>
        <Link className="nav-link" smooth to="#projects">Projects</Link>
        <Link className="nav-link" smooth to="#experience">Experience</Link>
        <Link className="nav-link" smooth to="#education">Education</Link>
        <Link className="nav-link" smooth to="#footer">Contact</Link>
        <a className="nav-link" href="https://bit.ly/2JSIT3Y">Resume</a>
      </span>
    </>
  )
}