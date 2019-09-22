import React, { Component } from "react";
import "../styles/LoginForm.css";

// SOURCE https://codepen.io/brianmontanaweb/pen/ZQojEd
export default class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <div>
        <div className="login-container">
          <form action="" className="form-login">
            <ul className="login-nav">
              <li className="login-nav__item active">
                <a href="#">Sign In</a>
              </li>
              <li className="login-nav__item">
                <a href="#" onClick={this.props.handleHomeClick}>
                  Sign Up
                </a>
              </li>
            </ul>
            <label className="login__label">Username</label>
            <input id="login-input-user" className="login__input" type="text" />
            <label className="login__label">Password</label>
            <input
              id="login-input-password"
              className="login__input"
              type="password"
            />
            <label className="login__label--checkbox">
              <input
                id="login-sign-up"
                type="checkbox"
                className="login__input--checkbox"
              />
              Remember me
            </label>
            <button className="login__submit" disabled>
              Sign in
            </button>
          </form>
          <a href="#" className="login__forgot">
            Forgot Password?
          </a>
        </div>
      </div>
    );
  }
}
