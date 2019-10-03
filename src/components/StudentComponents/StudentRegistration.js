import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Registration.css";

export default class Registration extends Component {
  handleHomeClick = () => {
    this.props.history.push("/");
  };

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      email: "",
      password_digest: "",
      skype_id: "",
      photo_url: "",
      native_language: ""
    };
  }

  rootUrl = "http://localhost:3000/api/v1/";
  studentsUrl = `${this.rootUrl}students`;

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(this.studentsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        student: {
          name: this.state.name,
          username: this.state.username,
          email: this.state.email,
          password: this.state.password_digest,
          skype_id: this.state.skype_id,
          photo_url:
            this.state.photo_url ||
            "https://icon-library.net/images/default-user-icon/default-user-icon-14.jpg",
          lessons_completed: 0,
          native_language: this.state.native_language,
          lesson_credits: 5
        }
      })
    })
      .then(resp => resp.json())
      .then(student => {
        // console.log(student);
        student.error
          ? toast(student.error, { autoclose: 5000 })
          : this.loginStudent(student);
      });
  };

  loginStudent = student => {
    if (student.error) {
      alert(student.error);
    } else {
      localStorage.setItem("current_user", student["jwt"]);
      localStorage.setItem("user_type", "student");
      this.props.setUser(student, "student");
      // this.props.history.push({
      //   pathname: "/profile",
      //   userType: "student"
      // });
    }
  };

  render() {
    return (
      <div className="form-div">
        <h1>Student Registration</h1>
        <h5>
          Ready to start learning? Please complete this registration form to get
          started today!
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
        <ToastContainer pauseOnFocusLoss={false} closeButton={false} />
      </div>
    );
  }
}
