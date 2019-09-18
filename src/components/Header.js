import React from "react";
import LoginModal from "./LoginModal";

// Function component. Use props, not this.props
const Header = props => {
  return (
    <div>
      {/* Logo: https://icons8.com/icons/set/translate */}
      <nav class="navbar transparent fixed-top navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img
            src="https://img.icons8.com/cotton/64/000000/translation--v2.png"
            width="30"
            height="30"
            alt=""
          />{" "}
          NativeSpeak
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Learn More <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
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
