import React from "react";
import LoginModal from "./LoginModal";
import "../styles/Header.css";

// Function component. Use props, not this.props
const Header = props => {
  return (
    <div>
      <div className="landing-parallax">
        <h1 className="h1-title">Hello</h1>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-secondary">
          I'm a student
        </button>
        <button type="button" class="btn btn-secondary">
          I'm a teacher
        </button>
      </div>
      {/* Logo: https://icons8.com/icons/set/translate */}
      <nav className="navbar transparent fixed-top navbar-light">
        <a className="navbar-brand" href="#">
          <img
            src="https://img.icons8.com/cotton/64/000000/translation--v2.png"
            width="30"
            height="30"
            alt=""
          />{" "}
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
            <li className="nav-item active">
              {/* Change to link to */}
              <a className="nav-link" href="#">
                Learn More <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
