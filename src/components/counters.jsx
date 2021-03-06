import React, { Component } from "react";
import Counter from "./counter";
import Body from "./body";
import Feet from "./feet";

class Counters extends Component {
  render() {
    const {
      counters,
      onDelete,
      onNextHead,
      onLastHead,
      onNextBody,
      onLastBody,
      onNextFeet,
      onLastFeet
    } = this.props;

    return (
      <React.Fragment>
        {counters.map(counter => (
          <span>
            <Counter
              key={counter.id}
              onDelete={onDelete}
              counter={counter}
              onNextHead={onNextHead}
              onLastHead={onLastHead}
            />
            <br />
            <Body
              // key={counter.id}
              onDelete={onDelete}
              counter={counter}
              onNextBody={onNextBody}
              onLastBody={onLastBody}
            />
            <br />
            <Feet
              // key={counter.id}
              onDelete={onDelete}
              counter={counter}
              onNextFeet={onNextFeet}
              onLastFeet={onLastFeet}
            />
            <br />
          </span>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
