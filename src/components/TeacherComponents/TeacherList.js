import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../styles/TeacherList.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class TeacherList extends Component {
  // https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
  constructor(props) {
    super(props);

    this.state = {
      filter: "",
      sortAlpha: true,
      sortRating: true
    };
  }

  // TODO
  redirectTeacher = id => {
    let thisTeacher = this.props.teachers.find(teacher => {
      return teacher.id === id;
    });
    thisTeacher.timeslots.length
      ? this.props.history.push(`/viewteacher/${id}`)
      : this.noBookings();
  };

  noBookings = () => {
    toast(
      "This teacher has no lesson times available. Please check back later.",
      {
        autoClose: 5000
      }
    );
  };

  averageRating = ratings => {
    if (ratings.length > 0) {
      let ratingValues = ratings.map(rating => {
        return rating.rating;
      });

      let ratingTotal = 0;
      for (let i = 0; i < ratingValues.length; i++) {
        ratingTotal += ratingValues[i];
      }

      let ratingAverage = parseInt(ratingTotal) / ratings.length;

      let averageRating = Number(ratingAverage);
      return averageRating.toFixed(2);
    } else {
      return 0;
    }
  };

  sortRatings = order => {
    // console.log(this.props.teachers.map(t => this.averageRating(t.ratings)));
    return order
      ? this.props.teachers.sort((a, b) =>
          this.averageRating(a.ratings) > this.averageRating(b.ratings) ? 1 : -1
        )
      : this.props.teachers.sort((a, b) =>
          this.averageRating(a.ratings) < this.averageRating(b.ratings) ? 1 : -1
        );
  };

  onSearchChange = event => {
    this.setState({ filter: event.target.value });
  };

  filteredTeachers = () => {
    if (this.state.filter.length > 0) {
      return this.props.teachers.filter(teacher => {
        return teacher.name
          .toLowerCase()
          .includes(this.state.filter.toLowerCase());
      });
    } else {
      return this.props.teachers;
    }
  };

  renderTableData = () => {
    return this.filteredTeachers().map(teacher => {
      const { id, name, photo_url, skype_id, intro_text, ratings } = teacher;
      return (
        <tr key={id}>
          <th scope="row">{name}</th>
          <td className="w-25">
            <img
              src={photo_url}
              className="img-fluid img-thumbnail teacher-images"
              alt="photo"
            />
          </td>
          <td>{skype_id}</td>
          <td>{this.averageRating(ratings)}</td>
          <td>{intro_text}</td>
          <td>
            <button
              onClick={() => this.redirectTeacher(id)}
              className="btn btn-primary btn-sm"
            >
              Book
            </button>
          </td>
        </tr>
      );
    });
  };

  changeSort = () => {
    this.setState(prevState => ({
      sortAlpha: !prevState.sortAlpha
    }));
    this.props.sortTeachers(this.state.sortAlpha);
  };

  changeRatingSort = () => {
    this.setState(prevState => ({
      sortRating: !prevState.sortRating
    }));
    this.sortRatings(this.state.sortRating);
  };

  render() {
    return (
      <div>
        <div className="container list-container">
          <div className="row">
            <div className="col-12">
              <div className="form-group search-box">
                <input
                  type="text"
                  className="form-control search-box-input"
                  placeholder="Search by teacher's name"
                  onChange={event => this.onSearchChange(event)}
                />
              </div>
              <table className="table table-image">
                <thead>
                  <tr>
                    <th>
                      Name
                      {this.state.sortAlpha ? (
                        <i
                          className="fas fa-sort-alpha-down alpha-icon"
                          onClick={this.changeSort}
                        ></i>
                      ) : (
                        <i
                          className="fas fa-sort-alpha-up alpha-icon"
                          onClick={this.changeSort}
                        ></i>
                      )}
                    </th>
                    <th>Photo</th>
                    <th>Skype ID</th>
                    <th>
                      Rating{" "}
                      {this.state.sortRating ? (
                        <i
                          className="fas fa-sort-amount-down alpha-icon"
                          onClick={this.changeRatingSort}
                        ></i>
                      ) : (
                        <i
                          className="fas fa-sort-amount-up alpha-icon"
                          onClick={this.changeRatingSort}
                        ></i>
                      )}
                    </th>
                    <th>Intro</th>
                  </tr>
                </thead>
                <tbody>{this.renderTableData()}</tbody>
              </table>
            </div>
          </div>
          <ToastContainer pauseOnFocusLoss={false} closeButton={false} />
        </div>
      </div>
    );
  }
}

export default withRouter(TeacherList);
