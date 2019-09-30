import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../styles/TeacherProfile.css";
import "../../App.css";

class TeacherProfile extends Component {
  // componentDidMount = () => {};

  redirectTeacher = id => {
    this.props.history.push(`/viewteacher/${id}`);
  };

  handleEditRedirect = id => {
    this.props.history.push(`/editteacher/${id}`);
  };

  render() {
    const {
      id,
      name,
      photo_url,
      skype_id,
      lessons_completed,
      intro_text,
      income_balance
    } = this.props.current_user.teacher;

    return (
      <div>
        <br></br>
        <h1>Welcome, {name}!</h1>
        {/* Inspiration https://codepen.io/botlab/pen/QvvNab */}
        {/* TODO students shouldn't see this at all */}
        <div className="col-md-9 col-lg-12 main">
          <div className="row mb-3">
            <div className="col-xl-3 col-lg-6">
              <div className="card">
                <div className="card-block ">
                  <div className="rotate">
                    <i className="fas fa-chalkboard-teacher fa-5x"></i>
                  </div>
                  <h6 className="text-uppercase">Lessons Completed</h6>
                  <h1 className="display-1">{lessons_completed}</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="card">
                <div className="card-block">
                  <div className="rotate">
                    <i className="fas fa-comment-dollar fa-5x"></i>
                  </div>
                  <h6 className="text-uppercase">Income Balance</h6>
                  <h1 className="display-1">${income_balance}</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="card">
                <div className="card-block">
                  <div className="rotate">
                    <i className="far fa-calendar-alt fa-5x"></i>
                  </div>
                  <h6 className="text-uppercase">Next Lesson</h6>
                  <h1 className="display-1">10/15</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="card">
                <div className="card-block">
                  <div className="rotate">
                    <i className="far fa-star fa-5x"></i>
                  </div>
                  <h6 className="text-uppercase">Rating</h6>
                  <h1 className="display-1">{this.props.averageRating}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 teacher-button-group">
          <p>
            <button
              type="button"
              className="btn teacher-buttons btn-lg"
              onClick={() =>
                this.handleEditRedirect(this.props.current_user.teacher.id)
              }
            >
              Edit Profile
            </button>
            <button
              type="button"
              className="btn teacher-buttons btn-lg"
              onClick={() => this.redirectTeacher(id)}
            >
              My Schedule
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(TeacherProfile);
