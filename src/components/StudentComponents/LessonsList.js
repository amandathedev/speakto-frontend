import React, { Component } from "react";

export default class LessonsList extends Component {
  constructor() {
    super();

    this.state = {
      current_month: new Date().getMonth(),
      current_day: new Date().getDate(),
      current_hour: new Date().getHours()
      // lessons: []
    };
  }

  renderTableData = () => {
    return this.props.lessons.map(lesson => {
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
    });
  };

  render() {
    console.log(this.props.lessons);

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
