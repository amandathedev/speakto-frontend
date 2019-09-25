import React, { Component } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Redirect
} from "react-router-dom";
import TeacherList from "./TeacherList";
import TeacherProfile from "./TeacherProfile";

class TeacherContainer extends Component {
  render() {
    return (
      <div>
        <h1>Hello from the teacher container</h1>
      </div>
    );
  }
}

export default withRouter(TeacherContainer);
