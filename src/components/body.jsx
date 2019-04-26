import React, { Component } from "react";

class Body extends Component {
  styles = {
    fontSize: 19,
    fontWeight: "light",
    display: "block"
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.onNextBody(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          LAST
        </button>
        <span className="m-3">
          <img
            src={this.props.counter.body}
            width="300"
            height="200"
            className="d-inline-block align-top"
            alt=""
          />
        </span>
        <button
          onClick={() => this.props.onLastBody(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          NEXT
        </button>
      </React.Fragment>
    );
  }
}

export default Body;
