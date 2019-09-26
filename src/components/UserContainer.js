import React, { Component } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Redirect
} from "react-router-dom";
import TeacherContainer from "./TeacherComponents/TeacherContainer";
import StudentProfile from "./StudentComponents/StudentProfile";
import Search from "./Search";

class UserContainer extends Component {
  render() {
    // debugger;
    return (
      <div>
        {/* this checks if its a student or nah */}
        {Object.keys(this.props.current_user)[0] == "student" ? (
          <StudentProfile
            current_user={this.props.current_user}
            user_type={this.props.user_type}
            teachers={this.props.teachers}
            ratings={this.props.ratings}
          />
        ) : (
          <TeacherContainer
            ratings={this.props.ratings}
            current_user={this.props.current_user}
            findUser={this.props.findUser}
            user_type={this.props.user_type}
            teachers={this.props.teachers}
            ratings={this.props.ratings}
          />
        )}
      </div>
    );
  }
}

export default withRouter(UserContainer);
