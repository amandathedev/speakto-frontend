import React, { Component } from "react";
import "../../styles/Registration.css";

export default class Registration extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      username: "",
      email: "",
      password_digest: "",
      skype_id: "",
      photo_url: "",
      intro_text: "",
      native_language: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="form-div">
        <h1>Student Registration</h1>
        <h5>
          Ready to start learning? Please complete this registration form to get
          started today!
        </h5>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Choose a username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={this.state.username}
                name="username"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Choose a password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.password_digest}
                name="password_digest"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Skype ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Skype"
                vaclue={this.state.skype_id}
                name="skype_id"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Enter a photo for your profile</label>
              <input
                type="url"
                className="form-control"
                placeholder="Default photo URL"
                value={this.state.photo_url}
                name="photo_url"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label>Native Language</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={this.state.native_language}
                name="native_language"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-9">
              <label>Tell us something about you</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={this.state.intro_text}
                name="intro_text"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-secondary">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}
