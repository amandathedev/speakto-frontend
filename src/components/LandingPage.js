import React, { Component } from "react";
import "../styles/LandingPage.css";
import TeacherRegistration from "./TeacherComponents/TeacherRegistration";
import StudentRegistration from "./StudentComponents/StudentRegistration";
import LandingContent from "./LandingContent";

export default class LandingPage extends Component {
  renderSwitch = option => {
    switch (option) {
      case "registerstudent":
        return <StudentRegistration />;
      case "registerteacher":
        return <TeacherRegistration />;
      case "landing":
        return (
          <LandingContent
            handleRegisterStudent={this.props.handleRegisterStudent}
            handleRegisterTeacher={this.props.handleRegisterTeacher}
            handleHomeClick={this.props.handleHomeClick}
            logged_in={this.props.logged_in}
            teachers={this.props.teachers}
          />
        );
    }
  };

  render() {
    // console.log(this.props);
    return <div>{this.renderSwitch(this.props.displayOption)}</div>;
  }
}
