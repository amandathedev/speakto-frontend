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
  handleLessonRedirect = () => {
    this.props.history.push("/teachers");
  };

  handleCreditsRedirect = () => {
    this.props.history.push("/buycredits");
  };

  handleEditRedirect = () => {
    this.props.history.push("/editprofile");
  };

  render() {
    let studentName = this.props.current_user.student.name;
    return (
      <div>
        <br></br>
        <h1>Welcome back, {studentName}!</h1>
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

          <a className="quicklink link3" onClick={this.handleEditRedirect}>
            <span className="ql_caption">
              <span className="outer">
                <span className="inner">
                  <h2>Edit my profile</h2>
                </span>
              </span>
            </span>
            <span className="ql_top"></span>
            <span className="ql_bottom"></span>
          </a>
        </div>
        {/* End buttons */}
      </div>
    );
  }
}

export default withRouter(StudentProfile);
