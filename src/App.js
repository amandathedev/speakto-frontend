import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
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
    // this.setUser();
    this.findUser();
  }

  setUser = (user, type) => {
    // debugger;
    this.setState({
      logged_in: true,
      current_user: user,
      user_type: type
    });
  };

  findUser = () => {
    let token = localStorage.getItem("current_user");
    let identity = localStorage.getItem("user_type");
    if (token) {
      // TODO fetch student#profile or teacher#profile /profile and send token
      // TODO authorization bearer token
      // TODO Authorize the user
      // TODO setstate with current user
      fetch(`http://localhost:3000/api/v1/${identity}profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(`hello from app.js`, data);
          this.setState(
            {
              logged_in: true,
              current_user: data[identity]
            },
            () => {
              // localStorage.setItem("current_user", data);
              this.props.history.push({
                pathname: `/profile`,
                userType: Object.keys(data[identity])[0]
              });
            }
          );
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
          current_user={this.state.current_user}
        />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
