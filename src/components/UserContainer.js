import React, { Component } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Redirect
} from "react-router-dom";
import TeacherContainer from "./TeacherComponents/TeacherContainer";
import StudentProfile from "./StudentComponents/StudentProfile";

class UserContainer extends Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.current_user)[0] == "student" ? (
          <StudentProfile
            current_user={this.props.current_user}
            user_type={this.props.user_type}
            teachers={this.props.teachers}
            ratings={this.props.ratings}
            lessons={this.props.lessons}
          />
        ) : (
          <TeacherContainer
            ratings={this.props.ratings}
            current_user={this.props.current_user}
            // findUser={this.props.findUser}
            user_type={this.props.user_type}
            teachers={this.props.teachers}
            ratings={this.props.ratings}
            timeslots={this.props.timeslots}
          />
        )}
      </div>
    );
  }
}

export default withRouter(UserContainer);
