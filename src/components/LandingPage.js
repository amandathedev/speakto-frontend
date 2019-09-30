import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/LandingPage.css";
import TeacherRegistration from "./TeacherComponents/TeacherRegistration";
import StudentRegistration from "./StudentComponents/StudentRegistration";
import LandingContent from "./LandingContent";
import LoginForm from "./LoginForm";
import UserContainer from "./UserContainer";
import TeacherContainer from "./TeacherComponents/TeacherContainer";
import BuyCredits from "./StudentComponents/BuyCredits";
import TeacherShow from "./TeacherComponents/TeacherShow";
import EditTeacher from "./TeacherComponents/EditTeacher";
import EditStudent from "./StudentComponents/EditStudent";
import LessonsList from "./StudentComponents/LessonsList";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <Switch>
          {this.props.logged_in ? (
            <Switch>
              <Route
                path="/profile"
                render={props => (
                  <UserContainer
                    {...props}
                    current_user={this.props.current_user}
                    teachers={this.props.teachers}
                    ratings={this.props.ratings}
                    user_type={this.props.user_type}
                    // findUser={this.props.findUser}
                    timeslots={this.props.timeslots}
                    sortTeachers={this.props.sortTeachers}
                    sortRatings={this.props.sortRatings}
                  />
                )}
              />
              {/* TODO Move these down to child */}
              <Route
                path="/teachers"
                render={props => (
                  <TeacherContainer
                    {...props}
                    current_user={this.props.current_user}
                    teachers={this.props.teachers}
                    ratings={this.props.ratings}
                    user_type={this.props.user_type}
                    timeslots={this.props.timeslots}
                    sortTeachers={this.props.sortTeachers}
                    sortRatings={this.props.sortRatings}
                  />
                )}
              />
              <Route
                path="/buycredits"
                render={props => (
                  <BuyCredits
                    {...props}
                    current_user={this.props.current_user}
                  />
                )}
              />
              <Route
                path="/viewteacher/:id"
                render={props => (
                  <TeacherShow
                    {...props}
                    current_user={this.props.current_user}
                    user_type={this.props.user_type}
                    timeslots={this.props.timeslots}
                    teachers={this.props.teachers}
                  />
                )}
              />
              <Route
                path="/editteacher/:id"
                render={props => (
                  <EditTeacher
                    {...props}
                    current_user={this.props.current_user}
                  />
                )}
              />
              <Route
                path="/editstudent/:id"
                render={props => (
                  <EditStudent
                    {...props}
                    current_user={this.props.current_user}
                  />
                )}
              />
              <Route
                path="/lessons"
                render={props => (
                  <LessonsList
                    {...props}
                    current_user={this.props.current_user}
                  />
                )}
              />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/" component={LandingContent} />
              {/* <Route exact path="" component={LandingContent} /> */}
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
