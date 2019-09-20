import React, { Component } from "react";
import "../styles/LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <br></br>
          <h2 className="landing-h1">How It Works</h2>
          {/* How it works */}
          {/* <div className="container-14 w-container"> */}
          <div className="div-block-19">
            <div className="div-block-22 w-clearfix">
              <img
                src="https://uploads-ssl.webflow.com/5aa7d15a30ed95ed7d985ee7/5aad43f72e1ff93ffd78ccb0_check_color-95a469a4.svg"
                className="image-10"
              />
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
              <img
                src="https://uploads-ssl.webflow.com/5aa7d15a30ed95ed7d985ee7/5aad43f72e1ff93ffd78ccb0_check_color-95a469a4.svg"
                className="image-10"
              />
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
              <img
                src="https://uploads-ssl.webflow.com/5aa7d15a30ed95ed7d985ee7/5aad43f72e1ff93ffd78ccb0_check_color-95a469a4.svg"
                className="image-10"
              />
              <div className="div-block-21">
                <h3 className="heading-10">Improve your skills</h3>
                <p className="paragraph-4">
                  Keep practicing your English to level up! Your teachers will
                  help you meet your goals and work on exactly what fits your
                  needs.
                </p>
              </div>
              {/* </div> */}
            </div>
          </div>
          {/* End how it works */}
          {/* Testimonials */}
          {/* SOURCE https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=testimonial-carousel */}
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-center m-auto">
                <h2>Testimonials</h2>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam eu sem tempor, varius quam at, luctus dui. Mauris
                        magna metus, dapibus nec turpis vel, semper malesuada
                        ante. Idac bibendum scelerisque non non purus.
                        Suspendisse varius nibh non aliquet.
                      </p>
                      <p className="overview">
                        <b>Paula Wilson</b>, Media Analyst
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
                        Vestibulum quis quam ut magna consequat faucibus.
                        Pellentesque eget nisi a mi suscipit tincidunt. Utmtc
                        tempus dictum risus. Pellentesque viverra sagittis quam
                        at mattis. Suspendisse potenti. Aliquam sit amet gravida
                        nibh, facilisis gravida odio.
                      </p>
                      <p className="overview">
                        <b>Antonio Moreno</b>, Web Developer
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
                        Phasellus vitae suscipit justo. Mauris pharetra feugiat
                        ante id lacinia. Etiam faucibus mauris id tempor
                        egestas. Duis luctus turpis at accumsan tincidunt.
                        Phasellus risus risus, volutpat vel tellus ac, tincidunt
                        fringilla massa. Etiam hendrerit dolor eget rutrum.
                      </p>
                      <p className="overview">
                        <b>Michael Holz</b>, Seo Analyst
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
          {/* Meet the teachers */}
          {/* SOURCE https://bootsnipp.com/snippets/92xNm */}
          <section id="team" className="pb-5">
            <div className="container">
              <h2>FEATURED TEACHERS</h2>
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div
                    className="image-flip"
                    ontouchstart="this.className.toggle('hover');"
                  >
                    <div className="mainflip">
                      <div className="frontside">
                        <div className="card">
                          <div className="card-body text-center">
                            <p>
                              <img
                                className=" img-fluid"
                                src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_04.jpg"
                                alt="card image"
                              />
                            </p>
                            <h4 className="card-title">teacher.name</h4>
                            <p className="card-text">Teacher.intro text</p>
                          </div>
                        </div>
                      </div>
                      <div className="backside">
                        <div className="card">
                          <div className="card-body text-center mt-4">
                            <h4 className="card-title">teacher.name</h4>
                            <p className="card-text">
                              Teacher.intro text Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div
                    className="image-flip"
                    ontouchstart="this.className.toggle('hover');"
                  >
                    <div className="mainflip">
                      <div className="frontside">
                        <div className="card">
                          <div className="card-body text-center">
                            <p>
                              <img
                                className=" img-fluid"
                                src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_05.png"
                                alt="card image"
                              />
                            </p>
                            <h4 className="card-title">teacher.name</h4>
                            <p className="card-text">Teacher.intro text</p>
                          </div>
                        </div>
                      </div>
                      <div className="backside">
                        <div className="card">
                          <div className="card-body text-center mt-4">
                            <h4 className="card-title">teacher.name</h4>
                            <p className="card-text">
                              Teacher.intro text Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div
                    className="image-flip"
                    ontouchstart="this.className.toggle('hover');"
                  >
                    <div className="mainflip">
                      <div className="frontside">
                        <div className="card">
                          <div className="card-body text-center">
                            <p>
                              <img
                                className=" img-fluid"
                                src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_06.jpg"
                                alt="card image"
                              />
                            </p>
                            <h4 className="card-title">teacher.name</h4>
                            <p className="card-text">Teacher.intro text</p>
                          </div>
                        </div>
                      </div>
                      <div className="backside">
                        <div className="card">
                          <div className="card-body text-center mt-4">
                            <h4 className="card-title">teacher.name</h4>
                            <p className="card-text">
                              Teacher.intro text Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* </div> */}
          {/* End meet the teachers */}
        </div>
      </div>
    );
  }
}
