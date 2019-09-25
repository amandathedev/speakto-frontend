import React, { Component } from "react";

export default class TeacherList extends Component {
  // https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
  allTeachers = this.props.teachers;
  renderTableData = () => {
    return this.props.teachers.map(teacher => {
      const {
        id,
        name,
        photo_url,
        skype_id,
        lessons_completed,
        intro_text
      } = teacher;
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
          <td>{lessons_completed}</td>
          <td>{intro_text}</td>
          <td>
            <button className="btn btn-primary btn-sm">Book</button>
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
                    <th scope="col">Total lessons</th>
                    <th scope="col">Intro</th>
                    <th scope="col"></th>
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
