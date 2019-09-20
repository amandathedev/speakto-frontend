import React from "react";
import LoginModal from "./LoginModal";
import "../styles/Header.css";

// Function component. Use props, not this.props
const Header = props => {
  // console.log(props);
  return (
    <div>
      <div className="landing-parallax"></div>
      {/* TODO */}
      <div className="btn-group" role="group">
        <button
          type="button"
          onClick={props.handleRegisterStudent}
          className="btn btn-secondary"
        >
          Register as a student
        </button>
        <button
          type="button"
          onClick={props.handleRegisterTeacher}
          className="btn btn-secondary"
        >
          Register as a teacher
        </button>
      </div>
      <nav className="navbar transparent fixed-top navbar-light">
        <a className="navbar-brand" onClick={props.handleHomeClick} href="#">
          <img
            src="https://img.icons8.com/cotton/64/000000/translation--v2.png"
            width="30"
            height="30"
            alt="Company Logo"
          />
          NativeSpeak
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* TODO Change to link to */}
              <a className="nav-link" onClick={props.handleLearnMoreClick}>
                Learn More
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" onClick={props.handleRegisterClick}>
                Register
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
