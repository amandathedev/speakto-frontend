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
  };

  render() {
    console.log(this.props);
    this.restructureData();
    return (
      <div className="main-schedule">
        <br></br>
        <h1>Availability</h1>
        <div className="schedule-div">
          <ul className="main">{this.betterRenderTimeslots()}</ul>
        </div>
      </div>
    );
  }
}
