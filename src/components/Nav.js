import React, { useState , useEffect, useCallback } from 'react';
import NavLinks from "./NavLinks";
import ResponsiveNav from "./ResponsiveNav";
import "../styles/Nav.css";
import useDocumentScrollThrottled from "../helpers/scrollFunc";
import useMediaQuery from "../helpers/useMediaQuery";

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
  const isBreakpoint = useMediaQuery("800px");

  return (
    <>
      <span id="navbar" className={`nav ${scrollStyle} ${shadowStyle}`}>
        {isBreakpoint ? (
          <ResponsiveNav />
        ) : (
          <NavLinks />
        )}
      </span>
    </>
  )
}