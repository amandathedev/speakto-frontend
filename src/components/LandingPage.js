import React, { Component } from "react";
import "../styles/LandingPage.css";
import TeacherRegistration from "./TeacherComponents/TeacherRegistration";
import StudentRegistration from "./StudentComponents/StudentRegistration";
import LearnMore from "./LearnMore";
import LandingContent from "./LandingContent";

export default class LandingPage extends Component {
  renderSwitch = option => {
    switch (option) {
      case "registerstudent":
        return <StudentRegistration />;
      case "registerteacher":
        return <TeacherRegistration />;
      case "landing":
        return <LandingContent />;
      // case "teacher":
      //   return <TeacherContainer />;
      // case "student":
      //   return <StudentContainer />;
      case "learnmore":
        return <LearnMore />;
    }
  };

  render() {
    return <div>{this.renderSwitch(this.props.displayOption)}</div>;
  }
}
