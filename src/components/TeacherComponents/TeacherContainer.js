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
    // console.log(this.props);
    return (
      <div>
        {this.props.current_user.student ? (
          <TeacherList teachers={this.props.teachers} />
        ) : null}
      </div>
    );
  }
}

export default withRouter(TeacherContainer);
