import React, { Component } from "react";
// import TeacherContainer from "./TeacherComponents/TeacherContainer";
// import StudentContainer from "./StudentComponents/StudentContainer";
// import LearnMore from "./LearnMore";
import Search from "./Search";

export default class UserContainer extends Component {
  // Use parent state to conditionally render these components
  // renderSwitch = option => {
  //   switch (option) {
  //     case "registerstudent":
  //       return <StudentContainer />;
  //     case "registerteacher":
  //       return <TeacherContainer />;
  //     case "teacher":
  //       return <TeacherContainer />;
  //     case "student":
  //       return <StudentContainer />;
  //     case "learnmore":
  //       return <LearnMore />;
  //   }
  // };

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
