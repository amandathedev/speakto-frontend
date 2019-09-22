import React, { Component } from "react";
import "../styles/LandingPage.css";
import TeacherRegistration from "./TeacherComponents/TeacherRegistration";
import StudentRegistration from "./StudentComponents/StudentRegistration";
import LandingContent from "./LandingContent";
import LoginForm from "./LoginForm";
import UserContainer from "./UserContainer";

export default class LandingPage extends Component {
  renderSwitch = option => {
    switch (option) {
      case "registerstudent":
        return (
          <StudentRegistration
            handleHomeClick={this.props.handleHomeClick}
            handleStudentSignup={this.props.handleStudentSignup}
          />
        );
      case "registerteacher":
        return (
          <TeacherRegistration handleHomeClick={this.props.handleHomeClick} />
        );
      case "login":
        return <LoginForm handleHomeClick={this.props.handleHomeClick} />;
      case "landing":
        return (
          <LandingContent
            handleRegisterStudent={this.props.handleRegisterStudent}
            handleRegisterTeacher={this.props.handleRegisterTeacher}
            handleHomeClick={this.props.handleHomeClick}
            handleLoginClick={this.props.handleLoginClick}
            logged_in={this.props.logged_in}
            teachers={this.props.teachers}
          />
        );
      case "studentsignup":
        return <UserContainer displayOption={this.props.displayOption} />;
      default:
        return (
          <LandingContent
            handleRegisterStudent={this.props.handleRegisterStudent}
            handleRegisterTeacher={this.props.handleRegisterTeacher}
            handleHomeClick={this.props.handleHomeClick}
            handleLoginClick={this.props.handleLoginClick}
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
