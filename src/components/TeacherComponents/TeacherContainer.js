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
        {/* <h1>teacher container</h1> */}
        {/* TODO */}
        {this.props.current_user.student ? (
          <TeacherList teachers={this.props.teachers} />
        ) : (
          <TeacherProfile current_user={this.props.current_user} />
        )}
      </div>
    );
  }
}

export default withRouter(TeacherContainer);
