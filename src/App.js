import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

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
      <div>
        <Header logged_in={this.state.logged_in} />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
