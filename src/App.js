import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserContainer from "./components/UserContainer";
import LandingPage from "./components/LandingPage";

const rootUrl = "http://localhost:3000/api/v1/";

// Class component
class App extends Component {
  constructor() {
    super();

    this.state = {
      logged_in: true,
      teachers: [],
      displayOption: "landing"
    };
  }

  componentDidMount() {
    this.fetchTeachers();
  }

  // Fetch teachers from the database
  fetchTeachers = () => {
    fetch(`${rootUrl}teachers`)
      .then(resp => resp.json())
      // Add to the state array
      .then(teachers => {
        this.setState({
          teachers
        });
      })
      .catch(alert);
  };

  handleRegisterStudent = () => {
    console.log("got here");
    this.setState({
      displayOption: "registerstudent"
    });
  };

  handleRegisterTeacher = () => {
    this.setState({
      displayOption: "registerteacher"
    });
  };

  handleHomeClick = () => {
    this.setState({
      displayOption: "landing"
    });
  };

  handleLoginClick = () => {
    this.setState({
      displayOption: "login"
    });
  };

  handleStudentSignup = () => {
    this.setState({
      displayOption: "studentsignup"
    });
  };

  handleStudentLogin = () => {
    this.setState({
      displayOption: "studentprofile"
    });
  };

  render() {
    // console.log(this.state.teachers);
    return (
      <div>
        {/* SOURCE https://reacttraining.com/react-router/web/guides/quick-start */}
        <Header handleHomeClick={this.handleHomeClick} />
        {/* If logged in, show usercontainer, else show landingpage */}
        {this.state.logged_in === false ? (
          <UserContainer displayOption={this.state.displayOption} />
        ) : (
          <LandingPage
            handleRegisterStudent={this.handleRegisterStudent}
            handleRegisterTeacher={this.handleRegisterTeacher}
            handleHomeClick={this.handleHomeClick}
            handleLoginClick={this.handleLoginClick}
            handleStudentSignup={this.handleStudentSignup}
            handleTeacherLogin={this.handleTeacherLogin}
            handleStudentLogin={this.handleStudentLogin}
            logged_in={this.state.logged_in}
            teachers={this.state.teachers}
            displayOption={this.state.displayOption}
          />
        )}
        {/* {this.state.logged_in === true ? (
          <Route
            path="/profile"
            render={props => (
              <UserContainer
                {...props}
                displayOption={this.state.displayOption}
              />
            )}
          />
        ) : (
          <Route
            path="/"
            render={props => (
              <LandingPage
                {...props}
                teachers={this.state.teachers}
                displayOption={this.state.displayOption}
              />
            )}
          />
          <LandingPage
            teachers={this.state.teachers}
            displayOption={this.state.displayOption}
          />
        )} */}
        <Footer />
      </div>
    );
  }
}

export default App;
