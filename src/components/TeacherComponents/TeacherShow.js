import React, { Component } from "react";

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

  // componentWillUnmount() {}
  // Map over the timeslots
  // Create a ul for every day with a timeslot
  // Add the date in month/day format
  // Create an li for every timeslot for each day
  // If the timeslot is booked, change the display
  // Add click listener to book the time slot if user_type = student
  // Teacher has the ability to cancel the lesson
  // Teacher has the ability to remove the availability from the list

  // TeacherProfile should do the same thing as this
  // Fix the rendering
  // Date format
  // If this.state.timeslot.available === false, don't display
  // Conditionally render unavailable timeslots on teacherprofile
  // For each timeslot, onclick => set availability to false and fetch to book timeslot and add current student's id and create a lesson
  // Add the booked lesson to that student's profile with a different fetch

  adamFunction = () => {
    const organized = {};
    this.state.timeslots.forEach(timeslot => {
      const { id, month, date, hour, available } = timeslot;
      if (organized[`${month}.${date}`]) {
        organized[`${month}.${date}`].push({ hour, available, id });
      } else {
        organized[`${month}.${date}`] = [{ hour, available, id }];
      }
    });
    console.log(organized);
    return organized;
  };

  betterRenderTimeslots = () => {
    const newObject = this.adamFunction();
    let allDays = [];
    for (let date in newObject) {
      let onThisDay = (
        <>
          <h3>{date}</h3>
          <li className="events">
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

  render() {
    this.adamFunction();
    return (
      <div>
        <br></br>
        <h1>Availability</h1>
        {/* {this.renderTimeslots()} */}
        <div className="schedule-div">
          <ul className="main">{this.betterRenderTimeslots()}</ul>
        </div>
      </div>
    );
  }
}
