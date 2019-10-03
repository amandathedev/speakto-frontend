import React, { Component } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Redirect
} from "react-router-dom";
import LessonsList from "./LessonsList";
import BuyCredits from "./BuyCredits";
// import "../App.css";
import "../../styles/StudentProfile.css";

class StudentProfile extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     // current_month: new Date().getMonth(),
  //     // current_day: new Date().getDate(),
  //     // current_hour: new Date().getHours(),
  //     lessons: []
  //   };
  // }

  handleLessonRedirect = () => {
    this.props.history.push("/teachers");
  };

  handleCreditsRedirect = () => {
    this.props.history.push("/buycredits");
  };

  handleEditRedirect = id => {
    this.props.history.push(`/editstudent/${id}`);
  };

  handleLessonListRedirect = () => {
    this.props.history.push("/lessons");
  };

  // fetchLessons = () => {
  //   const token = localStorage.getItem("current_user");
  //   fetch("http://localhost:3000/api/v1/lessons/", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   })
  //     .then(resp => resp.json())
  //     .then(lessons =>
  //       this.setState({
  //         lessons
  //       })
  //     );
  // };

  render() {
    let studentName = this.props.current_user.student.name;
    return (
      <div>
        <br></br>
        <h1 className="welcome-text">
          {!studentName ? "Welcome" : `Welcome, ${studentName}!`}
        </h1>
        <br></br>
        {/* Buttons */}
        <div id="home_quicklinks">
          <a className="quicklink link1" onClick={this.handleLessonRedirect}>
            <span className="ql_caption">
              <span className="outer">
                <span className="inner">
                  <h2>Book a lesson</h2>
                </span>
              </span>
            </span>
            <span className="ql_top"></span>
            <span className="ql_bottom"></span>
          </a>

          <a className="quicklink link2" onClick={this.handleCreditsRedirect}>
            <span className="ql_caption">
              <span className="outer">
                <span className="inner">
                  <h2>Buy credits</h2>
                </span>
              </span>
            </span>
            <span className="ql_top"></span>
            <span className="ql_bottom"></span>
          </a>

          <a
            className="quicklink link3"
            onClick={() =>
              this.handleLessonListRedirect(this.props.current_user.student.id)
            }
          >
            <span className="ql_caption">
              <span className="outer">
                <span className="inner">
                  <h2>My Lessons</h2>
                </span>
              </span>
            </span>
            <span className="ql_top"></span>
            <span className="ql_bottom"></span>
          </a>
        </div>
        {/* End buttons */}
        <div className="col-md-12 student-button-group">
          <p>
            <button
              type="button"
              className="btn student-buttons btn-lg"
              // onClick={this.handleEditRedirect}
              onClick={() =>
                this.handleEditRedirect(this.props.current_user.student.id)
              }
            >
              Edit My Profile
            </button>
            {/* <button
              type="button"
              className="btn student-buttons btn-lg"
              onClick={() =>
                this.handleLessonListRedirect(
                  this.props.current_user.student.id
                )
              }
            >
              Lesson History
            </button> */}
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(StudentProfile);
