import React, { Component } from "react";
// import TeacherContainer from "./TeacherComponents/TeacherContainer";
// import StudentContainer from "./StudentComponents/StudentContainer";
import Search from "./Search";

export default class UserContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {/* Pass in the state from the parent to the function above */}
        <h1>User container</h1>
        {/* {this.renderSwitch(this.props.displayOption)} */}
      </div>
    );
  }
}
