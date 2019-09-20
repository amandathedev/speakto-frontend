import React, { Component } from "react";
import Student from "./Student";
import StudentRegistration from "./StudentRegistration";

export default class StudentContainer extends Component {
  render() {
    return (
      <div>
        <h1>hello from the student container</h1>
        <StudentRegistration />
      </div>
    );
  }
}
