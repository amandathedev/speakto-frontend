import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class LessonsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_time: Date.now(),
      lessons: []
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("current_user");
    fetch("http://localhost:3000/api/v1/lessons/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(lessons => {
        lessons.map(lesson => {
          lesson.timeslot.realdate = new Date(lesson.timeslot.realdate);
          return lesson;
        });
        this.setState({
          lessons
        });
      });
  }

  cancelBooking = id => {
    const token = localStorage.getItem("current_user");
    fetch(`http://localhost:3000/api/v1/lessons/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(lesson => {
        if (lesson.message === "Lesson deleted") {
          document.getElementById("row" + id).remove();
        }
      });

    // toast("Lesson deleted.", {
    //   autoClose: 3000
    // });
  };

  sortDates = () => {
    return this.state.lessons.sort(function(a, b) {
      return new Date(b.timeslot.realdate) - new Date(a.timeslot.realdate);
    });
  };

  leaveRating = (event, id) => {
    // console.log(id);
    event.preventDefault();
    let token = localStorage.getItem("current_user");
    fetch("http://localhost:3000/api/v1/ratings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        rating: {
          rating: event.target.value,
          lesson_id: id
        }
      })
    })
      .then(resp => resp.json())
      .then(document.location.reload(true));
  };

  showStars = ratingNumber => {
    //  const stars = '<i className="fas fa-star"></i>'
    //  let starHtml;
    let stars = "";

    for (let i = 0; i < ratingNumber; i++) {
      // stars += <i className="fas fa-star checked"></i>;
      stars += `⭐`;
    }
    // for (let i = 0; i < 5 - ratingNumber; i++) {
    //   stars += <i class="fas fa-star"></i>;
    // }
    return stars;
  };

  renderTableData = () => {
    return this.state.lessons.length ? (
      this.sortDates().map(lesson => {
        return (
          <tr id={`row${lesson.id}`}>
            <th scope="row">{lesson.id}</th>
            {this.props.user_type === "teacher" ? (
              <td>{lesson.student.name}</td>
            ) : (
              <td>{lesson.teacher.name}</td>
            )}
            <td>
              {lesson.timeslot.month_name} {lesson.timeslot.date}
            </td>
            <td>{lesson.timeslot.hour}:00</td>
            {lesson.timeslot.realdate < this.state.current_time ? (
              <td>
                {!lesson.rating ? (
                  <div>
                    {this.props.user_type === "student" ? (
                      <div className="star-rating">
                        <input
                          type="radio"
                          id={`star5${lesson.id}`}
                          name="rating"
                          value="5"
                          onClick={event => this.leaveRating(event, lesson.id)}
                        />
                        <label
                          className="full"
                          htmlFor={`star5${lesson.id}`}
                          title="5 stars"
                        ></label>
                        <input
                          type="radio"
                          id={`star4${lesson.id}`}
                          name="rating"
                          value="4"
                          onClick={event => this.leaveRating(event, lesson.id)}
                        />
                        <label
                          className="full"
                          htmlFor={`star4${lesson.id}`}
                          title="4 stars"
                        ></label>
                        <input
                          type="radio"
                          id={`star3${lesson.id}`}
                          name="rating"
                          value="3"
                          onClick={event => this.leaveRating(event, lesson.id)}
                        />
                        <label
                          className="full"
                          htmlFor="star3"
                          htmlFor={`star3${lesson.id}`}
                          title="3 stars"
                        ></label>
                        <input
                          type="radio"
                          id={`star2${lesson.id}`}
                          name="rating"
                          value="2"
                          onClick={event => this.leaveRating(event, lesson.id)}
                        />
                        <label
                          className="full"
                          htmlFor={`star2${lesson.id}`}
                          title="2 stars"
                        ></label>
                        <input
                          type="radio"
                          id={`star1${lesson.id}`}
                          name="rating"
                          value="1"
                          onClick={event => this.leaveRating(event, lesson.id)}
                        />
                        <label
                          className="full"
                          htmlFor="star1"
                          htmlFor={`star1${lesson.id}`}
                          title="1 star"
                        ></label>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  // <h6 className="rating-h6">{lesson.rating.rating}/5</h6>
                  <span className="rating-span">
                    {this.showStars(lesson.rating.rating)}
                  </span>
                )}
              </td>
            ) : (
              <td>
                <button
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  className="lesson-button btn btn-sm btn-danger"
                  // onClick={() => this.cancelBooking(lesson.id)}
                >
                  Cancel
                </button>
                <div
                  class="modal fade confirm-modal"
                  id="exampleModalCenter"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">
                          Confirm cancellation
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body confirm-modal-body">
                        Are you sure you'd like to cancel this lesson?
                      </div>
                      <div class="modal-footer confirm-modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary confirm-button"
                          data-dismiss="modal"
                        >
                          No
                        </button>
                        <button
                          type="button"
                          data-dismiss="modal"
                          onClick={() => this.cancelBooking(lesson.id)}
                          class="btn btn-danger confirm-button"
                        >
                          Yes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            )}
          </tr>
        );
      })
    ) : (
      <h6 className="no-lessons">
        No lessons found. Please check out our list of teachers if you'd like to
        book a lesson!
      </h6>
    );
  };

  render() {
    return (
      <div>
        <h1 className="lesson-h1">Lessons</h1>
        <br></br>
        {/* <h5>
          If you'd like to apply for free lessons, please send us an email!
        </h5> */}
        <br></br>
        <div className="col-md-12 student-button-group"></div>
        <table className="table table-striped lesson-table">
          <thead>
            <tr>
              <th scope="col">Lesson ID</th>
              {this.props.user_type === "student" ? (
                <th scope="col">Teacher</th>
              ) : (
                <th scope="col">Student</th>
              )}
              {/* <th scope="col">Teacher</th> */}
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col" className="rating-header">
                Your Rating
              </th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
        <ToastContainer
          pauseOnFocusLoss={false}
          closeOnClick
          closeButton={false}
        />
      </div>
    );
  }
}
