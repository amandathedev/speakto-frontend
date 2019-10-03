import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// https://fkhadra.github.io/react-toastify/
import "../../styles/Registration.css";

export default class Registration extends Component {
  handleHomeClick = () => {
    this.props.history.push("/");
  };

  constructor() {
    super();

    this.state = {
      name: "",
      username: "",
      email: "",
      password_digest: "",
      skype_id: "",
      photo_url: "",
      intro_text: ""
    };
  }

  rootUrl = "http://localhost:3000/api/v1/";
  teachersUrl = `${this.rootUrl}teachers`;

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(this.teachersUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        teacher: {
          name: this.state.name,
          username: this.state.username,
          email: this.state.email,
          password: this.state.password_digest,
          skype_id: this.state.skype_id,
          photo_url:
            this.state.photo_url ||
            "https://icon-library.net/images/default-user-icon/default-user-icon-14.jpg",
          lessons_completed: 0,
          intro_text: this.state.intro_text,
          volunteer_points: 0,
          income_balance: 0
        }
      })
    })
      .then(resp => resp.json())
      .then(teacher => {
        console.log(teacher);
        teacher.error
          ? toast.success(teacher.error, {
              autoclose: 5000,
              pauseOnHover: false
            })
          : this.loginTeacher(teacher);
      });
  };

  loginTeacher = teacher => {
    if (teacher.error) {
      toast.success(teacher.error, { autoclose: 5000, pauseOnHover: false });
    } else {
      localStorage.setItem("current_user", teacher["jwt"]);
      localStorage.setItem("user_type", "teacher");
      this.props.setUser(teacher, "teacher");
      // this.props.history.push({
      //   pathname: "/profile",
      //   userType: "teacher"
      // });
    }
  };

  render() {
    return (
      <div className="form-div">
        <h1>Teacher Registration</h1>
        <h5>
          We'd love to have you as one of our teachers! Please complete this
          registration form to join us.
        </h5>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>
                Full Name<span className="required-asterisk"> *</span>
              </label>
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
              <label>
                Choose a username<span className="required-asterisk"> *</span>
              </label>
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
              <label>
                Email address<span className="required-asterisk"> *</span>
              </label>
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
              <label>
                Choose a password<span className="required-asterisk"> *</span>
              </label>
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
              <label>
                Skype ID<span className="required-asterisk"> *</span>
              </label>
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
            <div className="form-group col-md-6">
              <label>Tell us something about you</label>
              <textarea
                rows="4"
                cols="50"
                className="form-control"
                placeholder=""
                value={this.state.intro_text}
                name="intro_text"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={this.handleHomeClick}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-secondary">
            Sign up
          </button>
        </form>
        <ToastContainer
          pauseOnFocusLoss={false}
          closeOnClick
          closeButton={false}
        />
      </div>
    );
  }
}
