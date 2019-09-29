import React, { Component } from "react";

export default class EditTeacher extends Component {
  constructor(props) {
    super(props);
    const {
      id,
      name,
      username,
      email,
      skype_id,
      photo_url,
      intro_text
    } = this.props.current_user.teacher;

    this.state = {
      name: name,
      username: username,
      email: email,
      skype_id: skype_id,
      photo_url: photo_url,
      intro_text: intro_text
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  handleSubmit = event => {
    let token = localStorage.getItem("current_user");
    fetch(
      `http://localhost:3000/api/v1/teachers/${this.props.current_user.teacher.id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          teacher: {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            skype_id: this.state.skype_id,
            photo_url:
              this.state.photo_url ||
              "https://icon-library.net/images/default-user-icon/default-user-icon-14.jpg",
            intro_text: this.state.intro_text
          }
        })
      }
    );
  };

  render() {
    const {
      id,
      name,
      username,
      email,
      skype_id,
      photo_url,
      intro_text
    } = this.props.current_user.teacher;

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
              <label>Message</label>
              <input
                type="text"
                className="form-control"
                placeholder={intro_text}
                name="intro_text"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-secondary edit-submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

// See TeacherShow for fetching from /:id
