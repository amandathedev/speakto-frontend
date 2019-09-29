import React, { Component } from "react";
import BookingModal from "../BookingModal";
import "../../styles/TeacherSchedule.css";

export default class TeacherShow extends Component {
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

  // TODO
  getMonths = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    this.state.timeslots.map(timeslot => {
      timeslot.month = timeslot.month.getMonth();
    });
    return;
  };

  restructureData = () => {
    const organized = {};
    this.state.timeslots.forEach(timeslot => {
      const { id, month, date, hour, available } = timeslot;
      if (organized[`${month}.${date}`]) {
        organized[`${month}.${date}`].push({ hour, available, id });
      } else {
        organized[`${month}.${date}`] = [{ hour, available, id }];
      }
    });
    // console.log(organized);
    return organized;
  };

  betterRenderTimeslots = () => {
    const newObject = this.restructureData();
    let allDays = [];
    for (let date in newObject) {
      let onThisDay = (
        <>
          <li className="events">
            <div className="div-date">
              <h3 className="date-h3">{date}</h3>
            </div>
            <ul className="events-detail">
              {newObject[date].map(timeslot => {
                if (timeslot.available === false) {
                  return (
                    // TODO key
                    <li key={timeslot.id} className="unavailable-event">
                      {this.props.user_type === "student" ? (
                        <span className="event-time">
                          {timeslot.hour}:00 -- Unavailable
                        </span>
                      ) : (
                        <span className="event-time">
                          {timeslot.hour}:00 -- Lesson with student.name
                        </span>
                      )}
                    </li>
                  );
                } else {
                  return (
                    <li
                      key={timeslot.id}
                      className="available-timeslot"
                      data-toggle="modal"
                      data-target="#bookingModal"
                    >
                      {/* Modal. TODO move this cuz wtf */}
                      {this.props.user_type === "student" ? (
                        <div
                          className="modal fade"
                          id="bookingModal"
                          aria-labelledby="modalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                >
                                  <span aria-hidden="true">×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <form>
                                  <div className="form-group">
                                    <h4 className="modal-h4">New booking</h4>
                                    <label>Teacher's Name</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="input-teacher"
                                      placeholder={this.getTeacherName()}
                                      disabled
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label>Student's Name</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="input-student"
                                      placeholder={
                                        // TODO render modal for unavailable only for teachers and vice versa
                                        this.props.current_user.student.name
                                      }
                                      disabled
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label>Lesson time</label>
                                    <input
                                      type="text"
                                      id="input-timeslot"
                                      className="form-control"
                                      id="input-timeslot"
                                      placeholder="timeslot.date timeslot.hour"
                                      disabled
                                    />
                                  </div>
                                </form>
                              </div>
                              <div className="modal-footer">
                                <div
                                  className="btn-group modal-buttons btn-group-justified"
                                  role="group"
                                  aria-label="group button"
                                >
                                  <div
                                    className="btn-group modal-buttons btn-delete hidden cancel-btn"
                                    role="group"
                                  >
                                    <button
                                      type="button"
                                      className="btn btn-default"
                                      data-dismiss="modal"
                                      role="button"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                  <div
                                    className="btn-group modal-buttons booking-btn"
                                    role="group"
                                  >
                                    <button
                                      type="button"
                                      className="btn btn-default"
                                      data-action="save"
                                      role="button"
                                    >
                                      Book lesson
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : // {/* End modal */}
                      null}
                      {<span className="event-time">{timeslot.hour}:00</span>}
                    </li>
                  );
                }
              })}
            </ul>
          </li>
        </>
      );
      allDays.push(onThisDay);
    }
    return allDays;
  };

  getTeacherName = () => {
    let teacherObj = this.props.teachers.find(
      teacher => teacher.id == this.props.match.params.id
    );
    return teacherObj ? teacherObj.name : null;
  };

  render() {
    this.restructureData();
    return (
      <div className="main-schedule">
        <br></br>
        <h1>{this.getTeacherName()}'s Schedule</h1>
        {this.props.user_type === "student" ? (
          <p className="schedule-instructions">
            Please choose an available time to book a lesson.
          </p>
        ) : (
          <p className="schedule-instructions">
            Select a reserved time to view more information about the booking.
          </p>
        )}
        <div className="schedule-div">
          <ul className="main">{this.betterRenderTimeslots()}</ul>
        </div>
      </div>
    );
  }
}
