import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/BuyCredits.css";

export default class BuyCredits extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCredits: 10,
      cardName: "",
      ccNum: 0,
      expiration: 0,
      secCode: 0,
      lesson_credits: props.current_user.student.lesson_credits
    };
  }

  tenCredits = () => {
    this.setState({
      newCredits: 10
    });
  };

  thirtyCredits = () => {
    this.setState({
      newCredits: 30
    });
  };

  fiftyCredits = () => {
    this.setState({
      newCredits: 50
    });
  };

  hundredCredits = () => {
    this.setState({
      newCredits: 100
    });
  };

  validateForm = event => {
    event.preventDefault();
    if (this.state.cardName.length > 3 && this.state.ccNum.length > 3) {
      this.handleCreditSubmit();
    } else {
      toast.success(
        "Invalid information. Please correct the form and try again.",
        {
          autoClose: 5000,
          pauseOnHover: false
        }
      );
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCreditSubmit = event => {
    let token = localStorage.getItem("current_user");
    fetch(
      // `http://localhost:3000/api/v1/students/${this.props.current_user.student.id}`,
      `https://speakto-io-backend.herokuapp.com/api/v1/students/${this.props.current_user.student.id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          lesson_credits:
            this.state.newCredits +
            this.props.current_user.student.lesson_credits
        })
      }
    )
      .then(
        this.setState({
          lesson_credits:
            this.state.newCredits +
            this.props.current_user.student.lesson_credits
        })
      )
      .then(
        toast.success("Credit purchase successful.", {
          autoClose: 5000,
          pauseOnHover: false
        })
      );
  };

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
              <i className="fab fa-cc-stripe fa-5x"></i>
            </div>
            <h6 className="text-uppercase">Credits Available</h6>
            <h1 className="display-1">{this.state.lesson_credits}</h1>
          </div>
        </div>
        {/* Credit card form */}
        <div className="cc-container">
          <div id="Checkout" className="inline">
            <h1>Pay Invoice</h1>
            <div className="card-row">
              <span className="visa"></span>
              <span className="mastercard"></span>
              <span className="amex"></span>
              <span className="discover"></span>
            </div>
            <form>
              <div className="form-group">
                <label>How many credits would you like to purchase?</label>
                <br></br>
                <div
                  className="custom-control custom-radio custom-control-inline"
                  onClick={this.tenCredits}
                >
                  <input
                    type="radio"
                    id="customRadioInline1"
                    name="customRadioInline1"
                    className="custom-control-input"
                    defaultChecked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline1"
                  >
                    10 Credits
                  </label>
                </div>
                <div
                  className="custom-control custom-radio custom-control-inline"
                  onClick={this.thirtyCredits}
                >
                  <input
                    type="radio"
                    id="customRadioInline2"
                    name="customRadioInline1"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline2"
                  >
                    30 Credits
                  </label>
                </div>
                <div
                  className="custom-control custom-radio custom-control-inline"
                  onClick={this.fiftyCredits}
                >
                  <input
                    type="radio"
                    id="customRadioInline3"
                    name="customRadioInline1"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline3"
                  >
                    50 Credits
                  </label>
                </div>
                <div
                  className="custom-control custom-radio custom-control-inline"
                  onClick={this.hundredCredits}
                >
                  <input
                    type="radio"
                    id="customRadioInline4"
                    name="customRadioInline1"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline4"
                  >
                    100 Credits
                  </label>
                </div>
              </div>
              <div className="form-group">
                <br></br>
                <label>Payment amount</label>
                <div className="amount-placeholder">
                  <span>$ {this.state.newCredits}.00</span>
                </div>
              </div>
              <div className="form-group">
                <label or="NameOnCard">Name on card</label>
                <input
                  className="form-control"
                  type="text"
                  maxLength="255"
                  name="cardName"
                  onChange={this.handleChange}
                  required
                ></input>
              </div>
              <div className="form-group">
                <label>Card number</label>
                <input
                  className="card-image form-control"
                  name="ccNum"
                  type="number"
                  onChange={this.handleChange}
                  required
                ></input>
              </div>
              <div className="expiration-date-group form-group">
                <label>Expiration date</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="MM / YY"
                  name="expiration"
                  maxLength="7"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="security-code-group form-group">
                <label>Security code</label>
                <div className="input-container">
                  <input
                    className="form-control"
                    name="secCode"
                    type="number"
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <button
                className="btn btn-block btn-success submit-button"
                type="submit"
                onClick={this.validateForm}
              >
                <span className="align-middle">
                  <i class="fas fa-lock"></i> Pay ${this.state.newCredits}
                </span>
              </button>
            </form>
          </div>
        </div>
        {/* End credit card form */}
        <ToastContainer
          pauseOnFocusLoss={false}
          closeOnClick
          closeButton={false}
        />
      </div>
    );
  }
}
