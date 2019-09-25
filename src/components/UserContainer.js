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
    console.log(this.props);
    return (
      <div>
        {/* <h1>logged in</h1> */}
        {this.props.current_user.student ? (
          <StudentProfile current_user={this.props.current_user} />
        ) : (
          <TeacherContainer />
        )}
      </div>
    );
  }
}

export default withRouter(UserContainer);
