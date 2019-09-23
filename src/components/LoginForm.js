import React, { Component } from "react";
import "../styles/LoginForm.css";

// SOURCE https://codepen.io/brianmontanaweb/pen/ZQojEd
export default class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      current_user: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("1");
    event.preventDefault();
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        // Authorization: `Bearer <token>`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        student:
          // username: this.state.username,
          // password: this.state.password
          this.state
      })
    })
      .then(resp => resp.json())
      .then(data =>
        this.setState(
          {
            current_user: data.student
          },
          localStorage.setItem("current_user", data.jwt)
        )
      );
  };

  render() {
    console.log(this.state.current_user);
    // console;
    return (
      <div>
        <div className="login-container">
          <form
            onSubmit={event => this.handleSubmit(event)}
            className="form-login"
          >
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
            <input
              id="login-input-user"
              value={this.state.username}
              className="login__input"
              name="username"
              onChange={this.handleChange}
              type="text"
            />
            <label className="login__label">Password</label>
            <input
              id="login-input-password"
              value={this.state.password}
              className="login__input"
              name="password"
              onChange={this.handleChange}
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
            <button
              onClick={event => this.handleSubmit(event)}
              className="login__submit"
            >
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
