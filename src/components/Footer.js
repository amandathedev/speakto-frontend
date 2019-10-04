import React from "react";
import "../styles/Footer.css";

// Function component. Use props, not this.props
const Footer = props => {
  return (
    // <div>
    //   <h1>I am the footer</h1>
    // </div>
    // 	SOURCE https://stackoverflow.com/questions/33517524/how-to-add-the-footer-with-social-icons-in-bootstrap/33518069
    <footer className="footer fixed-bottom">
      <div className="container text-center">
        {/* <a href="http://www.facebook.com"> */}
        <a href="#">
          <i className="fa fa-facebook"></i>
        </a>
        {/* <a href="http://www.twitter.com"> */}
        <a href="#">
          <i className="fa fa-twitter"></i>
        </a>
        {/* TODO put back */}
        {/* <a href="mailto:contact.nativespeak@gmail.com"> */}
        <a href="#">
          <i className="far fa-envelope"></i>
        </a>
        <a href="#">
          {/* <a href="http://www.instagram.com"> */}
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          {/* <a href="http://www.skype.com"> */}
          <i className="fa fa-skype"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
