import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/LoginForm.css";

// SOURCE https://codepen.io/brianmontanaweb/pen/ZQojEd
export default class LoginForm extends Component {
  handleHomeClick = () => {
    this.props.history.push("/");
  };

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

  // TODO
  forgotPassword = () => {
    toast("Password reset instructions have been sent to your email address.", {
      autoClose: 10000
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password
        }
      })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.status === "accepted") {
          this.setState(
            {
              current_user: data["user"]
            },
            () => {
              localStorage.setItem("current_user", data["jwt"]);
              localStorage.setItem("user_type", Object.keys(data["user"])[0]);
              this.props.setUser(data["user"], Object.keys(data["user"])[0]);
              this.props.history.push({
                pathname: `/profile`,
                userType: Object.keys(data["user"])[0]
              });
            }
          );
        } else {
          let errorBox = document.getElementById("error-span");
          errorBox.innerHTML = data.message;
          errorBox.className = "error-box";
        }
      });
    // HERE
    // .then(this.props.fetchLessons());
  };

  render() {
    return (
      <div>
        <div className="login-container">
          <form
            onSubmit={event => this.handleSubmit(event)}
            className="form-login"
          >
            <ul className="login-nav">
              <li className="login-nav__item active">
                <a>Sign In</a>
              </li>
              <li className="login-nav__item">
                <a onClick={this.handleHomeClick}>Sign Up</a>
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
            <span id="error-span"></span>
            <br></br>
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
          {/* TODO */}
          <a className="login__forgot" onClick={this.forgotPassword}>
            Forgot Password?
          </a>
          <ToastContainer pauseOnFocusLoss={false} closeButton={false} />
        </div>
      </div>
    );
  }
}
