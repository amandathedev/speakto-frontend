import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/LandingPage.css";
import TeacherRegistration from "./TeacherComponents/TeacherRegistration";
import StudentRegistration from "./StudentComponents/StudentRegistration";
import LandingContent from "./LandingContent";
import LoginForm from "./LoginForm";
import UserContainer from "./UserContainer";
// import { PrivateRoute } from "../helpers/PrivateRoute";
export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <Switch>
          {this.props.logged_in ? (
            <Route exact path="/" component={UserContainer} />
          ) : (
            <Switch>
              <Route exact path="/" component={LandingContent} />
              <Route
                path="/login"
                render={props => (
                  <LoginForm {...props} setUser={this.props.setUser} />
                )}
              />
              <Route
                path="/newteacher"
                render={props => (
                  <TeacherRegistration
                    {...props}
                    setUser={this.props.setUser}
                  />
                )}
              />
              <Route
                path="/newstudent"
                render={props => (
                  <StudentRegistration
                    {...props}
                    setUser={this.props.setUser}
                  />
                )}
              />
            </Switch>
          )}
        </Switch>
      </div>
    );
  }
}
