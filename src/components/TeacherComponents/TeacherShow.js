import React, { Component } from "react";
// import BookingModal from "../BookingModal";
import "../../styles/TeacherSchedule.css";

export default class TeacherShow extends Component {
  constructor() {
    super();

    this.state = {
      timeslots: [],
      opened_timeslot: {}
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

  restructureData = () => {
    const organized = {};
    this.state.timeslots.forEach(timeslot => {
      const { id, month_name, date, hour, available } = timeslot;
      if (organized[`${month_name} ${date}`]) {
        organized[`${month_name} ${date}`].push({ hour, available, id });
      } else {
        organized[`${month_name} ${date}`] = [
          {
            month_name,
            date,
            hour,
            available,
            id
          }
        ];
      }
    });
    // console.log(organized);
    return organized;
  };

  openModal = timeslot => {
    const { id, month_name, date, hour, available } = timeslot;
    document.getElementById(
      "input-timeslot"
    ).value = `${month_name} ${date}, ${hour}:00`;
    this.setState({
      opened_timeslot: timeslot
    });
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
                  console.log(timeslot);
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
                      // id={`timeslot + ${timeslot.id}`}
                      className="available-timeslot"
                      data-toggle="modal"
                      data-target="#bookingModal"
                      onClick={() => this.openModal(timeslot)}
                    >
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

  bookLesson = () => {
    // PATCH add lesson with 3 foreign keys
    // Change render on this list
    // Add to student and teacher bookings
    let token = localStorage.getItem("current_user");
    fetch(`http://localhost:3000/api/v1/lessons`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        teacher_id: this.props.match.params.id,
        student_id: this.props.current_user.student.id,
        timeslot_id: this.state.opened_timeslot.id
      })
    })
      .then(data => data.json())
      .then(data => console.log(data));
  };

  // getTeacherPhoto = () => {
  //   let teacherImg = this.props.teacher.find(
  //     teacher => teacher.id === this.props.match.params.id
  //   );
  //   return teacherImg ? teacherImg.photo_url : null;
  // };

  render() {
    this.restructureData();
    return (
      <div className="main-schedule">
        <br></br>
        <h1>{this.getTeacherName()}'s Schedule</h1>
        {/* <img src={this.getTeacherPhoto()}></img> */}
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
                  <button type="button" className="close" data-dismiss="modal">
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
                        // placeholder={`${date} at ${timeslot.hour}:00`}
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
                        id="bookLessonButton"
                        className="btn btn-default"
                        data-action="save"
                        role="button"
                        data-timeslot=""
                        onClick={() => this.bookLesson()}
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
      </div>
    );
  }
}
