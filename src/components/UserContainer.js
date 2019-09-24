import React, { Component } from "react";
import TeacherContainer from "./TeacherComponents/TeacherContainer";
import StudentProfile from "./StudentComponents/StudentProfile";
import Search from "./Search";

export default class UserContainer extends Component {
  render() {
    return (
      <div>
        <h1>logged in</h1>
        {this.props.location.userType === "student" ? (
          <StudentProfile />
        ) : (
          <TeacherContainer />
        )}
      </div>
    );
  }
}
