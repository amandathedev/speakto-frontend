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
      logged_in: false,
      teachers: [],
      current_user: "",
      user_type: ""
    };
  }

  componentDidMount() {
    this.fetchTeachers();
    this.setUser();
  }

  setUser = (user, type) => {
    let token = localStorage.getItem("current_user");
    if (token) {
      // TODO fetch student#profile or teacher#profile /profile and send token
      // TODO Authorize the user
      // TODO setstate with current user similar to login/signup
      // TODO finish logout
      // fetch(`rootUrl${profile}`)
      // .then(resp => resp.json())
      // .then();
      this.setState({
        logged_in: true,
        current_user: user,
        user_type: type
      });
    } else {
      localStorage.removeItem("current_user");
    }
  };

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

  logout = () => {
    this.setState({
      logged_in: false,
      current_user: null,
      user_type: null
    });
  };

  render() {
    return (
      <div>
        <Header logged_in={this.state.logged_in} logout={this.logout} />
        <LandingPage
          logged_in={this.state.logged_in}
          user_type={this.state.user_type}
          setUser={this.setUser}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
