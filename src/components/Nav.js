import React, { useState , useEffect, useCallback } from 'react';
import NavLinks from "./NavLinks";
import ResponsiveNav from "./ResponsiveNav";
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

  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true)
      } else {
        setTargetReached(false)
      }
    }, [])

    useEffect(() => {
      const media = window.matchMedia("(max-width: 768px)")
      media.addEventListener("change", updateTarget)

      if (media.matches) {
        setTargetReached(true)
      }

      return () => media.removeEventListener("change", updateTarget)
    }, [])

    return targetReached;
  }

  const isBreakpoint = useMediaQuery()

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