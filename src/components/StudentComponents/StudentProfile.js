import React, { Component } from "react";
import LessonsList from "./LessonsList";
import "../../styles/StudentProfile.css";

export default class StudentProfile extends Component {
  render() {
    return (
      <div>
        <h1>Welcome, student.name!</h1>
        <a href="#" class="menu">
          Hello
        </a>
        <a href="#" class="menu">
          Hello
        </a>
        <a href="#" class="menu">
          Hello
        </a>
        {/* <div id="home_quicklinks">
          <a
            className="quicklink link1"
            href="#"
          >
            <span className="ql_caption">
              <span className="outer">
                <span className="inner">
                  <h2>Browse teachers</h2>
                </span>
              </span>
            </span>
            <span className="ql_top"></span>
            <span className="ql_bottom"></span>
          </a>

          <a
            className="quicklink link2"
            href="#"
          >
            <span className="ql_caption">
              <span className="outer">
                <span className="inner">
                  <h2>Buy credits</h2>
                </span>
              </span>
            </span>
            <span className="ql_top"></span>
            <span className="ql_bottom"></span>
          </a>

          <a
            className="quicklink link3"
            href="#"
          >
            <span className="ql_caption">
              <span className="outer">
                <span className="inner">
                  <h2>Edit my profile</h2>
                </span>
              </span>
            </span>
            <span className="ql_top"></span>
            <span className="ql_bottom"></span>
          </a>

          <div className="clear"></div>
        </div> */}
      </div>
    );
  }
}
