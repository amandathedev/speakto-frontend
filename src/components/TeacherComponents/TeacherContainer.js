import React, { Component } from "react";
import TeacherList from "./TeacherList";
import Teacher from "./Teacher";
import TeacherRegistration from "./TeacherRegistration";

export default class TeacherContainer extends Component {
  render() {
    return (
      <div>
        <h1>Hello from the teacher container</h1>
        <TeacherRegistration />
      </div>
    );
  }
}
