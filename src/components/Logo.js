import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

const Logo = () => {
  return (
    <Link smooth to="#top" id="nav-name" className="nav-link">Kelsi Proulx</Link>
  )
}

export default Logo;