import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/LandingPage.css";
import TeacherRegistration from "./TeacherComponents/TeacherRegistration";
import StudentRegistration from "./StudentComponents/StudentRegistration";
import LandingContent from "./LandingContent";
import LoginForm from "./LoginForm";
import UserContainer from "./UserContainer";
// import { PrivateRoute } from "../helpers/PrivateRoute";
export default class LandingPage extends Component {
  // renderSwitch = option => {
  //   switch (option) {
  //     case "registerstudent":
  //       return (
  //         <StudentRegistration
  //           handleHomeClick={this.props.handleHomeClick}
  //           handleStudentSignup={this.props.handleStudentSignup}
  //         />
  //       );
  //     case "registerteacher":
  //       return (
  //         <TeacherRegistration handleHomeClick={this.props.handleHomeClick} />
  //       );
  //     case "login":
  //       return <LoginForm handleHomeClick={this.props.handleHomeClick} />;
  //     case "landing":
  //       return (
  //         <LandingContent
  //           handleRegisterStudent={this.props.handleRegisterStudent}
  //           handleRegisterTeacher={this.props.handleRegisterTeacher}
  //           handleHomeClick={this.props.handleHomeClick}
  //           handleLoginClick={this.props.handleLoginClick}
  //           handleStudentLogin={this.props.handleStudentLogin}
  //           logged_in={this.props.logged_in}
  //           teachers={this.props.teachers}
  //         />
  //       );
  //     case "studentsignup":
  //       return <UserContainer displayOption={this.props.displayOption} />;
  //     default:
  //       return (
  //         <LandingContent
  //           handleRegisterStudent={this.props.handleRegisterStudent}
  //           handleRegisterTeacher={this.props.handleRegisterTeacher}
  //           handleHomeClick={this.props.handleHomeClick}
  //           handleLoginClick={this.props.handleLoginClick}
  //           handleStudentLogin={this.props.handleStudentLogin}
  //           logged_in={this.props.logged_in}
  //           teachers={this.props.teachers}
  //         />
  //       );
  //   }
  // };

  render() {
    // return <div>{this.renderSwitch(this.props.displayOption)}</div>;
    return (
      <div className="landing-page">
        <Switch>
          <Route exact path="/" component={LandingContent} />
          <Route path="/login" component={LoginForm} />
          <Route path="/newteacher" component={TeacherRegistration} />
          <Route
            path="/newstudent"
            render={props => <StudentRegistration {...props} />}
          />
          {/* <PrivateRoute path="/home" component={UserContainer} /> */}
        </Switch>
      </div>
    );
  }
}
