import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class EditStudent extends Component {
  constructor(props) {
    super(props);

    const {
      id,
      name,
      username,
      email,
      skype_id,
      photo_url,
      native_language
    } = this.props.current_user.student;

    this.state = {
      name: name,
      username: username,
      email: email,
      skype_id: skype_id,
      photo_url: photo_url,
      native_language: native_language
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let token = localStorage.getItem("current_user");
    fetch(
      `http://localhost:3000/api/v1/students/${this.props.current_user.student.id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          student: {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            skype_id: this.state.skype_id,
            photo_url:
              this.state.photo_url ||
              "https://icon-library.net/images/default-user-icon/default-user-icon-14.jpg",
            native_language: this.state.native_language
          }
        })
      }
      // .then(document.location.reload(true))
    ).then(this.editComplete());
  };

  editComplete = () => {
    toast("Your profile has been edited successfully.", {
      autoClose: 10000
    });
  };

  render() {
    const {
      id,
      name,
      username,
      email,
      skype_id,
      photo_url,
      native_language
    } = this.props.current_user.student;

    return (
      <div className="form-div">
        <h1>Edit Profile</h1>
        <br></br>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder={name}
                // value={name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Choose a username</label>
              <input
                type="text"
                className="form-control"
                placeholder={username}
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
                placeholder={email}
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Skype ID</label>
              <input
                type="text"
                className="form-control"
                placeholder={skype_id}
                name="skype_id"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Photo</label>
              <input
                type="url"
                className="form-control"
                placeholder={photo_url}
                name="photo_url"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Native Language</label>
              <input
                type="text"
                className="form-control"
                placeholder={native_language}
                name="native_language"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-secondary edit-submit">
            Submit
          </button>
        </form>
        <ToastContainer pauseOnFocusLoss={false} closeButton={false} />
      </div>
    );
  }
}

export default withRouter(EditStudent);
