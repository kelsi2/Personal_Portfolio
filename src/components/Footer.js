import React from "react";
import Form from "../components/Form"
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="contact-form-header">
          <h2 className="section-header">Contact Me</h2>
          <hr className="rule" />
        </div>
        <Form />
        <div id="social-icons">
          <a className="social-icon" href="https://www.linkedin.com/in/kelsi-dev/"><i class="fab fa-linkedin-in"></i></a>
          <a className="social-icon" href="https://github.com/kelsi2"><i class="fab fa-github"></i></a>
          <a className="social-icon" href="https://twitter.com/KelsiProulx"><i class="fab fa-twitter"></i></a>
        </div>
      </div>    
    </>
  )
}

export default Footer