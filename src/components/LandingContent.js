import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "../styles/LandingPage.css";
import FeaturedTeachers from "./FeaturedTeachers";

export default class LandingContent extends Component {
  handleStudentRedirect = () => {
    this.props.history.push("/newstudent");
  };

  handleTeacherRedirect = () => {
    this.props.history.push("/newteacher");
  };

  handleLoginRedirect = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <h1 className="h1-title">NativeSpeak</h1>
        <h5 className="h5-intro">
          Chat with native speakers and learn to speak like a native speaker.
        </h5>
        {/* Buttons */}
        <div id="home_quicklinks">
          <a className="quicklink link1" onClick={this.handleLoginRedirect}>
            <span className="ql_caption">
              <span className="outer">
                <span className="inner">
                  <h2>Sign in to my account</h2>
                </span>
              </span>
            </span>
            <span className="ql_top"></span>
            <span className="ql_bottom"></span>
          </a>

          <a className="quicklink link2" onClick={this.handleStudentRedirect}>
            <span className="ql_caption">
              <span className="outer">
                <span className="inner">
                  <h2>Register as a new student</h2>
                </span>
              </span>
            </span>
            <span className="ql_top"></span>
            <span className="ql_bottom"></span>
          </a>

          <a onClick={this.handleTeacherRedirect} className="quicklink link3">
            <span className="ql_caption">
              <span className="outer">
                <span className="inner">
                  <h2>Register as a new teacher</h2>
                </span>
              </span>
            </span>
            <span className="ql_top"></span>
            <span className="ql_bottom"></span>
          </a>
        </div>
        {/* End buttons */}
        <div className="landing">
          <br></br>
          <h2 className="underline">How It Works</h2>
          {/* How it works */}
          <div className="div-block-19">
            <div className="div-block-22 w-clearfix">
              <i class="fas fa-check-circle fa-2x"></i>
              <div className="div-block-21">
                <h3 className="heading-10">Buy credits</h3>
                <p className="paragraph-4">
                  Purchase lesson credits or apply for free credits through our
                  volunteer system. Your credits never expire and can be used to
                  speak with any teacher!
                </p>
              </div>
            </div>
            <div className="div-block-22 w-clearfix">
              <i class="fas fa-check-circle fa-2x"></i>
              <div className="div-block-21">
                <h3 className="heading-10">Chat with a native speaker</h3>
                <p className="paragraph-4">
                  Have a personalized lesson or free-form conversation with the
                  teacher of your choosing whenever it is most convenient for
                  you!
                </p>
              </div>
            </div>
            <div className="div-block-22 w-clearfix">
              <i class="fas fa-check-circle fa-2x"></i>
              <div className="div-block-21">
                <h3 className="heading-10">Improve your skills</h3>
                <p className="paragraph-4">
                  Keep practicing your English to level up! Your teachers will
                  help you meet your goals and work on exactly what fits your
                  needs.
                </p>
              </div>
            </div>
          </div>
          {/* End how it works */}
          {/* Testimonials */}
          {/* SOURCE https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=testimonial-carousel */}
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-center m-auto">
                <h2 className="underline">Testimonials</h2>
                <div
                  id="myCarousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#myCarousel"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="item carousel-item active">
                      <div className="img-box">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lieLfHh0i1ad-EErUNEVe30BJN2UfVc1OWqXMGOjpTGgb7HJ6Q"
                          alt=""
                        />
                      </div>
                      <p className="testimonial">
                        I achieved 108 points on the TOEFL test, thanks to the
                        NativeSpeak lessons! I recommended NativeSpeak to my
                        peers who are also trying to get into business school,
                        though I was reluctant to recommend it to my
                        competition.
                      </p>
                      <p className="overview">
                        <b>Michael Holz</b>, Media Analyst
                      </p>
                    </div>
                    <div className="item carousel-item">
                      <div className="img-box">
                        <img
                          src="https://www.womenofthesquaremile.com/hubfs/Vivienne%20Artz.jpg"
                          alt=""
                        />
                      </div>
                      <p className="testimonial">
                        I have regular business meetings with native English
                        speakers. Through practice on NativeSpeak, I am now able
                        to speak with them confidently, which was not easy
                        before.
                      </p>
                      <p className="overview">
                        <b>Anita Moreno</b>, Web Developer
                      </p>
                    </div>
                    <div className="item carousel-item">
                      <div className="img-box">
                        <img
                          src="https://i2.wp.com/therighthairstyles.com/wp-content/uploads/2014/03/8-choppy-collarbone-cut.jpg?zoom=2.625&resize=392%2C392&ssl=1"
                          alt=""
                        />
                      </div>
                      <p className="testimonial">
                        It's a very unique opportunity for people like me who
                        want to study abroad and to talk with a student who
                        actually goes to the school I want to attend. Video chat
                        is good because it was like a live face-to-face session.
                      </p>
                      <p className="overview">
                        <b>Paula Wilson</b>, Seo Analyst
                      </p>
                    </div>
                  </div>
                  <a
                    className="carousel-control left carousel-control-prev"
                    href="#myCarousel"
                    data-slide="prev"
                  >
                    <i className="fa fa-angle-left"></i>
                  </a>
                  <a
                    className="carousel-control right carousel-control-next"
                    href="#myCarousel"
                    data-slide="next"
                  >
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End testimonials */}
          {/* {this.props.teachers.map(teacher => {
            return <FeaturedTeachers key={teacher.id} teacher={teacher} />;
          })} */}

          <FeaturedTeachers teachers={this.props.teachers} />
        </div>
      </div>
    );
  }
}
