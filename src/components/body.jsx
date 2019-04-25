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
        {/* <span style={this.styles} className={this.changeBadgeColour()}>
          {this.formatCount()}
        </span> */}
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
          />
        </span>
        <button
          onClick={() => this.props.onLastBody(this.props.counter)}
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

export default Body;
