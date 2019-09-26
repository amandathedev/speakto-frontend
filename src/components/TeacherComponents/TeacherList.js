import React, { Component } from "react";

// const style = {
//   image: {
//     backgroundColor: "black"
//   }
// };

export default class TeacherList extends Component {
  // https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg

  // redirectTeacher = () => {
  //   // TODO
  //   // this.props.history.push("/teachers");
  // };
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

  renderTableData = () => {
    console.log(this.props);

    return this.props.teachers.map(teacher => {
      // Deconstruct
      const { id, name, photo_url, skype_id, intro_text, ratings } = teacher;

      return (
        <tr key={id}>
          <th scope="row">{name}</th>
          <td className="w-25">
            <img
              src={photo_url}
              className="img-fluid img-thumbnail"
              alt="photo"
            />
          </td>
          <td>{skype_id}</td>
          <td>{this.averageRating(ratings)}</td>
          <td>{intro_text}</td>
          <td>
            <button
              onClick={this.redirectTeacher}
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
              <table className="table table-image">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Photo</th>
                    <th scope="col">Skype ID</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Intro</th>
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
