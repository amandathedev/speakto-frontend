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
      user_type: "",
      ratings: []
    };
  }

  componentDidMount() {
    this.findUser();
    if (this.state.logged_in) {
      this.fetchRatings();
      this.fetchTeachers();
    }
  }

  setUser = (user, type) => {
    this.setState(
      {
        logged_in: true,
        current_user: user,
        user_type: type
      },
      () => {
        this.fetchRatings();
        this.fetchTeachers();
      }
    );
  };

  findUser = () => {
    let token = localStorage.getItem("current_user");
    let identity = localStorage.getItem("user_type");
    if (token) {
      fetch(`http://localhost:3000/api/v1/${identity}profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          // console.log(`hello from app.js`, data);
          this.setState(
            {
              logged_in: true,
              current_user: data[identity]
            },
            () => {
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
    let token = localStorage.getItem("current_user");
    fetch(`${rootUrl}teachers`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(teachers => {
        this.setState({
          teachers
        });
      })
      .catch(alert);
  };

  fetchRatings = () => {
    // teacher is logged in, this fetch returns that teacher's ratings
    // student is logged in, this fetch returns all the ratings
    let token = localStorage.getItem("current_user");
    fetch(`${rootUrl}ratings?identity=${this.state.user_type}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(ratings => {
        // console.log(ratings);
        this.setState({
          ratings
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
    console.log(this.state);
    return (
      <div>
        <Header logged_in={this.state.logged_in} logout={this.logout} />
        <LandingPage
          logged_in={this.state.logged_in}
          setUser={this.setUser}
          current_user={this.state.current_user}
          user_type={this.state.user_type}
          teachers={this.state.teachers}
          ratings={this.state.ratings}
          findUser={this.findUser}
        />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
