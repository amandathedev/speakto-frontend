import React, { Component } from "react";
import "../../styles/TeacherSchedule.css";

export default class TeacherShow extends Component {
  constructor() {
    super();

    this.state = {
      timeslots: []
    };
  }

  componentDidMount() {
    this.getTeacherName();
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
                return (
                  <li>
                    {<span className="event-time">{timeslot.hour}:00</span>}
                  </li>
                );
              })}
            </ul>
          </li>
        </>
      );
      allDays.push(onThisDay);
    }
    return allDays;
  };

  renderTimeslots = () => {
    // let dates = [];
    // return this.state.timeslots.map(timeslot => {
    //   const { id, month, date, hour, available } = timeslot;
    //   // TODO switch this
    //   if (!date.available) {
    //     if (!dates.includes(date)) {
    //       dates.push(date);
    //       return {
    /* <ul className="main">
                <h3>
                  {month}.{date}
                </h3>
                <li className="events">
                  <ul className="events-detail">
                    <li>{<span className="event-time">{hour}:00</span>}</li>
                  </ul>
                </li>
              </ul> */
    //       };
    //     } else {
    //       return (
    //         <ul className="events-detail">
    //           <li className="events-detail">
    //             <span className="event-time">{hour}:00</span>
    //           </li>
    //         </ul>
    //       );
    //     }
    //   }
    // });
  };

  getTeacherName = () => {
    // this.props.match.params.id;
    return this.props.teachers.map(teacher => {
      if (teacher.id == this.props.match.params.id) {
        // console.log(teacher.id);
        // console.log(this.props.match.params.id);
        // console.log(teacher.name);
        return teacher.name;
      }
    });
  };

  render() {
    // console.log(this.props.match.params.id);
    // console.log(this.props.user_type);
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
