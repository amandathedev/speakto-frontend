import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../styles/TeacherSchedule.css";

class TeacherSchedule extends Component {
  // Map over the timeslots
  // Create a ul for every day with a timeslot
  // Add the date in month/day format
  // Create an li for every timeslot for each day
  // If the timeslot is booked, change the display
  // Add click listener to book the time slot if user_type = student
  // Teacher has the ability to cancel the lesson
  // Teacher has the ability to remove the availability from the list

  constructor() {
    super();

    this.state = {
      timeslots: []
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("current_user");
    fetch(
      `http://localhost:3000/api/v1/timeslots/${this.props.match.params.id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then(resp => resp.json())
      .then(timeslots =>
        this.setState({
          timeslots
        })
      );
  }

  render() {
    console.log(this.state);
    return (
      <div className="schedule-div">
        <hr></hr>
        <h1>Availability</h1>
        <ul className="main">
          <li className="date">
            <h3>October 4</h3>
          </li>
          <li className="events">
            <ul className="events-detail">
              <li>
                <a href="#">
                  <span className="event-time">2:00pm - </span>
                  <span className="event-name">Available</span>
                  <br />
                  <br></br>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <br></br>
      </div>
    );
  }
}

export default withRouter(TeacherSchedule);
