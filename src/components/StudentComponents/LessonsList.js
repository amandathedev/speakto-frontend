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
      .then(lessons =>
        this.setState({
          lessons
        })
      );
  }

  renderTableData = () => {
    return this.state.lessons.length ? (
      this.state.lessons.map(lesson => {
        return (
          <tr>
            <th scope="row">{lesson.id}</th>
            <td>{lesson.teacher.name}</td>
            <td>
              {lesson.timeslot.month_name} {lesson.timeslot.date}
            </td>
            <td>{lesson.timeslot.hour}:00</td>
          </tr>
        );
      })
    ) : (
      <h6>'Loading'</h6>
    );
  };

  render() {
    return (
      <div>
        <h1 className="lesson-h1">Lessons</h1>
        <br></br>
        <div className="col-md-12 student-button-group">
          {/* <button type="button" className="btn student-buttons btn-lg">
            Lesson History
          </button> */}
        </div>
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
