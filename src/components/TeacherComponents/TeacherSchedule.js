import React, { Component } from "react";
import Timeslot from "./Timeslot";
import "../../styles/TeacherSchedule.css";

export default class TeacherSchedule extends Component {
  // Map over the timeslots
  // Create a ul for every day with a timeslot
  // Create an li for every timeslot for each day
  // If the timeslot is booked, change the display
  // Add click listener to book the time slot if user_type = student
  // Teacher has the ability to cancel the lesson
  // Teacher has the ability to remove the availability from the list

  render() {
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

              <li>
                <a href="#">
                  <span className="event-time">3:00pm - </span>
                  <span className="event-name">Booked</span>
                  <br />
                  <br></br>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="event-time">4:00pm - </span>
                  <span className="event-name">Available</span>
                  <br />
                  <br></br>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="event-time">5:00pm - </span>
                  <span className="event-name">Available</span>
                  <br />
                  <br></br>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="event-time">6:00pm - </span>
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
