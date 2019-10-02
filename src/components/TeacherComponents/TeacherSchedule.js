// import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
// import "../../styles/TeacherSchedule.css";

// class TeacherSchedule extends Component {
//   constructor() {
//     super();

//     this.state = {
//       timeslots: []
//     };
//   }

//   componentDidMount() {
//     const token = localStorage.getItem("current_user");
//     fetch(
//       `http://localhost:3000/api/v1/timeslots/${this.props.match.params.id}`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       }
//     )
//       .then(resp => resp.json())
//       .then(timeslots =>
//         this.setState({
//           timeslots
//         })
//       );
//   }

//   render() {
//     return (
//       <div className="schedule-div">
//         <hr></hr>
//         <h1>Availability</h1>
//         <ul className="main">
//           <li className="date">
//             <h3>October 4</h3>
//           </li>
//           <li className="events">
//             <ul className="events-detail">
//               <li>
//                 <a href="#">
//                   <span className="event-time">2:00pm - </span>
//                   <span className="event-name">Available</span>
//                   <br />
//                   <br></br>
//                 </a>
//               </li>
//             </ul>
//           </li>
//         </ul>
//         <br></br>
//       </div>
//     );
//   }
// }

// export default withRouter(TeacherSchedule);
