import React, { Component } from "react";

class Feet extends Component {
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
          onClick={() => this.props.onNextFeet(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          LAST
        </button>
        <span className="m-3">
          <img
            src={this.props.counter.feet}
            width="200"
            height="200"
            className="d-inline-block align-top"
            alt=""
          />
        </span>
        <button
          onClick={() => this.props.onLastFeet(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          NEXT
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
}

export default Feet;
