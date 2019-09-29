import React, { Component } from "react";
import "../styles/FeaturedTeachers.css";

export default class FeaturedTeachers extends Component {
  render() {
    return (
      <div>
        {/* Meet the teachers */}
        {/* SOURCE https://bootsnipp.com/snippets/92xNm */}
        <section id="team" className="pb-5">
          <div className="container featured">
            <h2 className="underline">FEATURED TEACHERS</h2>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="card">
                  <div className="card-body text-center">
                    <p>
                      <img
                        className=" img-fluid"
                        src="https://static2.comicvine.com/uploads/original/11131/111318414/5778427-jim%20halpert.jpg"
                        alt="teacher 1"
                      />
                    </p>
                    <h4 className="card-title">Jim Halpert</h4>
                    <p className="card-text">
                      You can practice your English while we talk about sports.
                      Whatever kind of sports you want.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="card">
                  <div className="card-body text-center">
                    <p>
                      <img
                        className=" img-fluid"
                        src="https://media1.popsugar-assets.com/files/thumbor/eOF2Umn-mqNGnohxrtjeurwWDmI/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/08/20/677/n/1922283/1118a12c5b7adb1e342de9.55515725_/i/Michael-Scott-Misquotations-Office-Video.jpg"
                        alt="teacher 2"
                      />
                    </p>
                    <h4 className="card-title">Michael Scott</h4>
                    <p className="card-text">
                      You miss 100% of the shots you don't take.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="card">
                  <div className="card-body text-center">
                    <p>
                      <img
                        className=" img-fluid"
                        src="https://media1.popsugar-assets.com/files/thumbor/eXDFklp6xdWXLyvn9BcH5p-b_rk/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/06/21/951/n/1922283/05e3e789_edit_img_image_41730517_1466542783_kelly-th/i/Kelly-Kapoor-GIFs-From-Office.jpg"
                        alt="teacher 3"
                      />
                    </p>
                    <h4 className="card-title">Kelly Kapoor</h4>
                    <p className="card-text">
                      Let's talk about pop culture and gossip. I can teach you
                      everything about my favorite celebrities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </div> */}
        {/* End meet the teachers */}
      </div>
    );
  }
}
