import React, { Component } from "react";
import TeacherContainer from "./TeacherComponents/TeacherContainer";
import StudentProfile from "./StudentComponents/StudentProfile";
import Search from "./Search";

export default class UserContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.displayOption === "studentsignup" ? (
          <StudentProfile />
        ) : (
          <TeacherContainer />
        )}
      </div>
    );
  }
}
