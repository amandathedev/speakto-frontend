import React, { Component } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Redirect
} from "react-router-dom";
import TeacherList from "./TeacherList";
import TeacherProfile from "./TeacherProfile";

class TeacherContainer extends Component {
  getAverageRating = () => {
    if (this.props.ratings.length > 0) {
      let ratingValues = this.props.ratings.map(rating => {
        return rating.rating;
      });

      let ratingTotal = 0;
      for (let i = 0; i < ratingValues.length; i++) {
        ratingTotal += ratingValues[i];
      }

      let ratingAverage = parseInt(ratingTotal) / this.props.ratings.length;

      let averageRating = ratingAverage.toFixed(2);
      return averageRating;
    } else {
      return "--";
    }
  };

  render() {
    return (
      <div>
        {/* TODO everywhere else */}
        {this.props.current_user.student ? (
          <TeacherList
            teachers={this.props.teachers}
            user_type={this.props.user_type}
            timeslots={this.props.timeslots}
            sortTeachers={this.props.sortTeachers}
            sortRatings={this.props.sortRatings}
            ratings={this.getAverageRating}
          />
        ) : (
          <TeacherProfile
            filterRatings={this.filterRatings}
            ratings={this.props.ratings}
            current_user={this.props.current_user}
            timeslots={this.props.timeslots}
            averageRating={this.props.ratings ? this.getAverageRating() : ""}
          />
        )}
      </div>
    );
  }
}

export default withRouter(TeacherContainer);
