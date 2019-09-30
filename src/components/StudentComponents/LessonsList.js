import React, { Component } from "react";

export default class LessonsList extends Component {
  render() {
    return (
      <div>
        <h1 className="lesson-h1">upcoming lessons/lesson history</h1>
        <br></br>
        <table className="table table-striped lesson-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Teacher</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>teacher.name</td>
              <td>timeslot.month_name timeslot.date</td>
              <td>timeslot.hour</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
