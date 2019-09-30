import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../styles/TeacherList.css";

class TeacherList extends Component {
  // https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
  constructor(props) {
    super(props);

    this.state = {
      filter: ""
    };
  }

  redirectTeacher = id => {
    // {
    //   this.props.teachers[id - 1].timeslots
    //     ?
    this.props.history.push(`/viewteacher/${id}`);
    //     : console.log("nah");
    // }
    // console.log(this.props.teachers[id - 1].name);
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

      let averageRating = ratingAverage.toFixed(2);
      return averageRating;
    } else {
      return "--";
    }
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
            {/* TODO if the teacher has no timeslots, stay here */}
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

  render() {
    return (
      <div>
        <div className="container">
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
                    <th>Name</th>
                    <th>Photo</th>
                    <th>Skype ID</th>
                    <th>Rating</th>
                    <th>Intro</th>
                  </tr>
                </thead>
                <tbody>{this.renderTableData()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TeacherList);
