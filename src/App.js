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
      logged_in: false,
      teachers: [],
      students: []
    };
  }

  componentDidMount() {
    this.fetchTeachers();
    this.fetchStudents();
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

  fetchStudents = () => {
    fetch(`${rootUrl}students`)
      .then(resp => resp.json())
      .then(students => {
        this.setState({
          students
        });
      })
      .catch(alert);
  };

  render() {
    console.log(this.state);
    return (
      // TODO
      <div>
        {/* SOURCE https://reacttraining.com/react-router/web/guides/quick-start */}
        <Header logged_in={this.state.logged_in} />
        {/* If logged in, show usercontainer, else show landingpage */}
        {this.state.logged_in ? (
          <Route exact path="/profile" component={UserContainer} />
        ) : (
          <Route exact path="/" component={LandingPage} />
          // Login
          // Nested ternary
        )}
        <Footer />
        {/* <Link to="/profile">Click me to go to the user container</Link> */}
      </div>
    );
  }
}

export default App;
