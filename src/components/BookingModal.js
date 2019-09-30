// import React, { Component } from "react";
// import "../styles/BookingModal.css";

// export default class BookingModal extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div
//         className="modal fade"
//         id="bookingModal"
//         aria-labelledby="modalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <button type="button" className="close" data-dismiss="modal">
//                 <span aria-hidden="true">×</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <form>
//                 <div className="form-group">
//                   <h4 className="modal-h4">New booking</h4>
//                   <label>Teacher's Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="input-teacher"
//                     // placeholder={this.getTeacherName()}
//                     disabled
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Student's Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="input-student"
//                     placeholder={
//                       // TODO render modal for unavailable only for teachers and vice versa
//                       this.props.current_user.student.name
//                     }
//                     disabled
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Lesson time</label>
//                   <input
//                     type="text"
//                     id="input-timeslot"
//                     className="form-control"
//                     id="input-timeslot"
//                     // placeholder={`${date} at ${timeslot.hour}:00`}
//                     disabled
//                   />
//                 </div>
//               </form>
//             </div>
//             <div className="modal-footer">
//               <div
//                 className="btn-group modal-buttons btn-group-justified"
//                 role="group"
//                 aria-label="group button"
//               >
//                 <div
//                   className="btn-group modal-buttons btn-delete hidden cancel-btn"
//                   role="group"
//                 >
//                   <button
//                     type="button"
//                     className="btn btn-default"
//                     data-dismiss="modal"
//                     role="button"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//                 <div
//                   className="btn-group modal-buttons booking-btn"
//                   role="group"
//                 >
//                   <button
//                     type="button"
//                     className="btn btn-default"
//                     data-action="save"
//                     role="button"
//                     onClick={event =>
//                       // this.bookLesson(timeslot.id)
//                       console.log(event.target)
//                     }
//                   >
//                     Book lesson
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
