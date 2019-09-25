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
    return (
      <div>
        {this.props.current_user.student ? (
          <StudentProfile current_user={this.props.current_user} />
        ) : (
          <TeacherContainer current_user={this.props.current_user} />
        )}
      </div>
    );
  }
}

export default withRouter(UserContainer);
