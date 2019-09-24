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
    // this.setUser();
  }

  setUser = (user, type) => {
    this.setState({
      logged_in: true,
      current_user: user,
      user_type: type
    });
  };

  // setUser = (user, type) => {
  //   let token = localStorage.getItem("current_user");
  //   if (token) {
  //     // TODO fetch student#profile or teacher#profile /profile and send token
  //     // TODO authorization bearer token
  //     // TODO Authorize the user
  //     // TODO setstate with current user
  //     fetch("http://localhost:3000/api/v1/profile", {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer <token>`
  //       }
  //     })
  //       .then(resp => resp.json())
  //       .then(data => {
  //         this.setState(
  //           {
  //             current_user: data["user"]
  //           },
  //           () => {
  //             localStorage.setItem("current_user", data["jwt"]);
  //             this.props.setUser(data["user"], Object.keys(data["user"])[0]);
  //             this.props.history.push({
  //               pathname: "/profile",
  //               userType: Object.keys(data["user"])[0]
  //             });
  //           }
  //         );
  //       });
  //   } else {
  //     localStorage.removeItem("current_user");
  //   }
  // };

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
