import React, { Component } from "react";
import TeacherSchedule from "./TeacherSchedule";

export default class TeacherProfile extends Component {
  render() {
    // console.log(this.props.current_user.teacher.name);
    let teacherName = this.props.current_user.teacher.name;
    return (
      <div>
        <h1>Welcome back, {teacherName}!</h1>
        <TeacherSchedule />
      </div>
    );
  }
}
