import React, { Component } from "react";
import h1 from "../img/heads/h1.png";
// import TextBox from "./textbox";
class Counter extends Component {
  // state = {
  //   count: this.props.counter.value,
  //   tags: ["party", "moparty", "bullshit"]
  // };

  //   constructor() {
  //     super();
  //     this.incrementButton = this.incrementButton.bind(this);
  //   }

  styles = {
    fontSize: 19,
    fontWeight: "light",
    display: "block"
  };

  render() {
    return (
      <React.Fragment>
        {/* <span style={this.styles} className={this.changeBadgeColour()}>
          {this.formatCount()}
        </span> */}
        <button
          onClick={() => this.props.onNext(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          YAY
        </button>
        <span className="m-3">
          <img
            src={this.props.counter.head}
            width="200"
            height="200"
            className="d-inline-block align-top"
            alt=""
            padding="15"
          />
        </span>
        <button
          onClick={() => this.props.onLast(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          HA
        </button>
        {/* <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          GONEZO
        </button> */}
      </React.Fragment>
    );
  }

  // changeBadgeColour() {
  //   let classes = "badge m-2 badge-";
  //   classes += this.props.counter.value === 0 ? "warning" : "primary";
  //   return classes;
  // }

  // formatCount() {
  //   const { value } = this.props.counter;
  //   return value === 0 ? "Zero" : value;
  // }
}

export default Counter;