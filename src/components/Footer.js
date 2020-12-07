import React from "react";
import Form from "../components/Form"
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>    
      <Form />
        <div id="social-icons">
          <a className="social-icon" href="https://www.linkedin.com/in/kelsi-dev/"><i class="fab fa-linkedin-in"></i></a>
          <a className="social-icon" href="https://github.com/kelsi2"><i class="fab fa-github"></i></a>
          <a className="social-icon" href="https://twitter.com/KelsiProulx"><i class="fab fa-twitter"></i></a>
        </div>
    </>
  )
}

export default Footer