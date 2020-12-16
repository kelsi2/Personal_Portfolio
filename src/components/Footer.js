import React from "react";
// import Form from "../components/Form"
import "../styles/Footer.css";

const Footer = () => {
  const d = new Date().getFullYear();

  return (
    <>
      <div className="contact-form-header">
        <h2 className="section-header">Contact Me</h2>
        <hr className="rule" />
      </div>
      <div id="footer">
        {/* <div className="form-content">
          <Form /> */}
          <a href="mailto:kproulxdev@gmail.com?subject=Contact from kelsidev.net" className="email-link">Email me</a>
          <div id="social-icons">
            <a className="social-icon" href="https://www.linkedin.com/in/kelsi-dev/"><i className="fab fa-linkedin-in"></i></a>
            <a className="social-icon" href="https://github.com/kelsi2"><i className="fab fa-github"></i></a>
            <a className="social-icon" href="https://twitter.com/KelsiProulx"><i className="fab fa-twitter"></i></a>
          </div>
          <span className="copyright">© {d} Kelsi Proulx</span>
        </div>
      {/* </div>     */}
    </>
  )
}

export default Footer