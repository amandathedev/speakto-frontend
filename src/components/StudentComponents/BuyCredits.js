import React, { Component } from "react";
import "../../styles/BuyCredits.css";

export default class BuyCredits extends Component {
  render() {
    return (
      <div className="buy-credits-main">
        <br></br>
        <h1>Buy credits</h1>
        <br></br>
        <div className="card total-credits-card">
          <div className="card-block ">
            <div className="rotate">
              {/* <i class="far fa-credit-card fa-5x"></i> */}
              <i class="fab fa-cc-stripe fa-5x"></i>
            </div>
            <h6 className="text-uppercase">Credits Available</h6>
            <h1 className="display-1">5</h1>
          </div>
        </div>
      </div>
    );
  }
}
