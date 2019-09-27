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

  //   var dates = []
  // this.state.timeslots.forEach(ts => {
  // 	if (!dates.includes(ts.date)) {
  // 	dates.push(ts.date)}})

  renderTimeslots = () => {
    // // timeslots
    // var tsObject = {};
    // // dates
    // var ds = [];

    // var newTimeslotObject = this.state.timeslots.forEach(ts => {
    //   var d = ts.date.toString();
    //   var h = ts.hour.toString();
    //   if (!ds.includes(d)) {
    //     ds.push(d);
    //     tsObject[d] = ts.hour.split();
    //   } else {
    //     tsObject[d].push(ts);
    //   }
    // });
    // debugger;

    // for (date in newTimeslotObject) {
    return this.state.timeslots.map(timeslot => {
      const { id, month, date, hour, available } = timeslot;
      // TODO switch this
      if (!date.available)
        return (
          <div className="schedule-div">
            <ul className="main">
              <li className="date">
                <h3>
                  {month}.{date}
                </h3>
              </li>
              <li className="events">
                <ul className="events-detail">
                  <li>
                    <a href="#">
                      <span className="event-time">{hour}</span>
                      <span className="event-name">{available}</span>
                      <br></br>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        );
    });
  };

  render() {
    return (
      <div>
        <br></br>
        <h1>Availability</h1>
        {this.renderTimeslots()}
      </div>
    );
  }
}
