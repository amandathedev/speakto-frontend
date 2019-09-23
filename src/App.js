import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

const rootUrl = "http://localhost:3000/api/v1/";

class App extends Component {
  constructor() {
    super();

    this.state = {
      logged_in: true,
      teachers: []
    };
  }

  componentDidMount() {
    this.fetchTeachers();
  }

  fetchTeachers = () => {
    fetch(`${rootUrl}teachers`)
      .then(resp => resp.json())
      .then(teachers => {
        this.setState({
          teachers
        });
      })
      .catch(alert);
  };

  render() {
    return (
      <div>
        <Header />
        <LandingPage />
        <Footer />
        {/* SOURCE https://reacttraining.com/react-router/web/guides/quick-start */}
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
      </div>
    );
  }
}

export default App;
