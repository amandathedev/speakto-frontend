import React, { Component } from "react";
import TeacherContainer from "./TeacherComponents/TeacherContainer";
import StudentContainer from "./StudentComponents/StudentContainer";
import Registration from "./Registration";
import Search from "./Search";

export default class UserContainer extends Component {
  // Use parent state to conditionally render these components
  renderSwitch = option => {
    switch (option) {
      case "register":
        return <Registration />;
      case "teacher":
        return <TeacherContainer />;
      case "student":
        return <StudentContainer />;
    }
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        {/* Pass in the state from the parent to the function above */}
        {this.renderSwitch(this.props.displayOption)}
      </div>
    );
  }
}
