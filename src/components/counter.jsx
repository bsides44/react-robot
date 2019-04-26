import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 19,
    fontWeight: "light",
    display: "block"
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.onNextHead(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          LAST
        </button>
        <span className="m-3">
          <img
            src={this.props.counter.head}
            width="200"
            height="200"
            className="d-inline-block align-top"
            alt=""
          />
        </span>
        <button
          onClick={() => this.props.onLastHead(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          NEXT
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
