import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "../styles/Header.css";

export default class Header extends Component {
  handleHomeClick = () => {
    {
      this.props.logged_in
        ? (window.location.href = "/profile")
        : (window.location.href = "/");
    }
  };

  logout = () => {
    localStorage.clear();
    this.props.logout();
    window.location.href = "/";
  };

  render() {
    return (
      <div>
        <div>
          <nav className="navbar fixed-top navbar-expand-lg scrolling-navbar">
            <a className="navbar-brand" onClick={this.handleHomeClick}>
              <img
                src="https://img.icons8.com/cotton/64/000000/translation--v2.png"
                width="30"
                height="30"
                alt="Company Logo"
              />
              <strong> NativeSpeak</strong>
            </a>
            {this.props.logged_in && (
              <button onClick={this.logout}>logout</button>
            )}
            {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Logout <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div> */}
          </nav>
          <div className="landing-parallax"></div>
        </div>
      </div>
    );
  }
}
