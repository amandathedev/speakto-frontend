import React, { Component } from "react";

export default class LessonsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_time: Date.now(),
      lessons: []
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("current_user");
    fetch("http://localhost:3000/api/v1/lessons/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(lessons => {
        lessons.map(lesson => {
          lesson.timeslot.realdate = new Date(lesson.timeslot.realdate);
          return lesson;
        });
        this.setState({
          lessons
        });
      });
  }

  sortDates = () => {
    return this.state.lessons.sort(function(a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(a.timeslot.realdate) - new Date(b.timeslot.realdate);
    });
  };

  renderTableData = () => {
    // map over sorted array from separate function
    return this.state.lessons.length ? (
      this.sortDates().map(lesson => {
        return (
          <tr>
            <th scope="row">{lesson.id}</th>
            <td>{lesson.teacher.name}</td>
            <td>
              {lesson.timeslot.month_name} {lesson.timeslot.date}
            </td>
            <td>{lesson.timeslot.hour}:00</td>
            {lesson.timeslot.realdate < this.state.current_time ? (
              <td>
                <button>review pls</button>
              </td>
            ) : (
              <td>:)</td>
            )}
          </tr>
        );
      })
    ) : (
      <h6>'Loading'</h6>
    );
  };

  alreadyHappened = () => {
    return this.state.lessons.map(lesson => {
      {
        return lesson.timeslot.realdate > this.state.current_time
          ? true
          : false;
      }
    });
  };

  render() {
    this.alreadyHappened();
    return (
      <div>
        <h1 className="lesson-h1">Lessons</h1>
        <br></br>
        <div className="col-md-12 student-button-group"></div>
        <table className="table table-striped lesson-table">
          <thead>
            <tr>
              <th scope="col">Lesson ID</th>
              <th scope="col">Teacher</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}
