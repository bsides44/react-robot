import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import h1 from "./img/heads/h1.png";
import h2 from "./img/heads/h2.png";
import h3 from "./img/heads/h3.png";
import h4 from "./img/heads/h4.png";
import h5 from "./img/heads/h5.png";
import h6 from "./img/heads/h6.png";
import h7 from "./img/heads/h7.png";
import h8 from "./img/heads/h8.png";
import h9 from "./img/heads/h9.png";
import h10 from "./img/heads/h10.png";
import h11 from "./img/heads/h11.png";
import h12 from "./img/heads/h12.png";
import h13 from "./img/heads/h13.png";
import h14 from "./img/heads/h14.png";
import h15 from "./img/heads/h15.png";
import b1 from "./img/bodies/b1.png";
import b2 from "./img/bodies/b2.png";
import b3 from "./img/bodies/b3.png";
import b4 from "./img/bodies/b4.png";
import b5 from "./img/bodies/b5.png";
import b6 from "./img/bodies/b6.png";
import b7 from "./img/bodies/b7.png";
import b8 from "./img/bodies/b8.png";
import b9 from "./img/bodies/b9.png";
import b10 from "./img/bodies/b10.png";
import b11 from "./img/bodies/b11.png";
import b12 from "./img/bodies/b12.png";
import b13 from "./img/bodies/b13.png";
import b14 from "./img/bodies/b14.png";
import b15 from "./img/bodies/b15.png";
import f1 from "./img/feet/f1.png";
import f2 from "./img/feet/f2.png";
import f3 from "./img/feet/f3.png";
import f4 from "./img/feet/f4.png";
import f5 from "./img/feet/f5.png";
import f6 from "./img/feet/f6.png";
import f7 from "./img/feet/f7.png";
import f8 from "./img/feet/f8.png";
import f9 from "./img/feet/f9.png";
import f10 from "./img/feet/f10.png";
import f11 from "./img/feet/f11.png";
import f12 from "./img/feet/f12.png";
import f13 from "./img/feet/f13.png";
import f14 from "./img/feet/f14.png";
import f15 from "./img/feet/f15.png";
import { debug } from "util";

class App extends Component {
  state = {
    counters: [{ head: h1, body: b1, feet: f1 }]
  };

  componentDidMount() {
    // const originalState = [...this.state.counters];
    // this.setState({
    //   ...this.state.counters,
    //   originalState
    // });
    // this.handleRefresh(originalState);
    const heads = [
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      h7,
      h8,
      h9,
      h10,
      h11,
      h12,
      h13,
      h14,
      h15
    ];
    const bodies = [
      b1,
      b2,
      b3,
      b4,
      b5,
      b6,
      b7,
      b8,
      b9,
      b10,
      b11,
      b12,
      b13,
      b14,
      b15
    ];
    const feet = [
      f1,
      f2,
      f3,
      f4,
      f5,
      f6,
      f7,
      f8,
      f9,
      f10,
      f11,
      f12,
      f13,
      f14,
      f15
    ];
    let index = Math.floor(Math.random() * heads.length + 0);
    let counters = [...this.state.counters];
    counters[0].head = heads[index];
    counters[0].body = bodies[index];
    counters[0].feet = feet[index];

    this.setState({
      counters,
      index,
      heads,
      bodies,
      feet
    });
  }

  // styles = {
  //   fontSize: 15,
  //   fontWeight: "light"
  // };

  // handleDelete = counterID => {
  //   const counters = this.state.counters.filter(c => c.id !== counterID);
  //   this.setState({
  //     counters
  //   });
  // };

  // handleReset = () => {
  //   {
  //     const counters = this.state.counters.map(c => {
  //       c.value = 0;
  //       return c;
  //     });

  //     this.setState({
  //       counters
  //     });
  //   }
  // };

  // handleRefresh = () => {
  //   const counters = this.state.originalState;
  //   this.setState({
  //     counters
  //   });
  // };

  // NextButton = counter => {
  //   // console.log(this.state.counters.h1);
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;

  //   this.setState({
  //     counters
  //   });
  // };

  NextHeadButton = () => {
    const heads = [...this.state.heads];
    let index = [this.state.index];
    index++;
    if (index >= heads.length) {
      index = 0;
    }
    if (index <= -1) {
      index = heads.length - 1;
    }
    let counters = [...this.state.counters];
    counters[0].head = heads[index];

    this.setState({
      counters,
      index
    });
  };

  LastHeadButton = counter => {
    const heads = [...this.state.heads];
    let index = [this.state.index];
    index--;
    if (index >= heads.length) {
      index = 0;
    }
    if (index <= -1) {
      index = heads.length - 1;
    }
    let counters = [...this.state.counters];
    counters[0].head = heads[index];

    this.setState({
      counters,
      index
    });
  };

  NextBodyButton = () => {
    const bodies = [...this.state.bodies];
    let index = [this.state.index];
    index++;
    if (index >= bodies.length) {
      index = 0;
    }
    if (index <= -1) {
      index = bodies.length - 1;
    }
    let counters = [...this.state.counters];
    counters[0].body = bodies[index];

    this.setState({
      counters,
      index
    });
  };

  LastBodyButton = counter => {
    const bodies = [...this.state.bodies];
    let index = [this.state.index];
    index--;
    if (index >= bodies.length) {
      index = 0;
    }
    if (index <= -1) {
      index = bodies.length - 1;
    }
    let counters = [...this.state.counters];
    counters[0].body = bodies[index];

    this.setState({
      counters,
      index
    });
  };

  NextFeetButton = () => {
    const feet = [...this.state.feet];
    let index = [this.state.index];
    index++;
    if (index >= feet.length) {
      index = 0;
    }
    if (index <= -1) {
      index = feet.length - 1;
    }
    let counters = [...this.state.counters];
    counters[0].feet = feet[index];
    this.setState({
      counters,
      index
    });
  };

  LastFeetButton = () => {
    const feet = [...this.state.feet];
    let index = [this.state.index];
    index--;
    if (index >= feet.length) {
      index = 0;
    }
    if (index <= -1) {
      index = feet.length - 1;
    }
    let counters = [...this.state.counters];
    counters[0].feet = feet[index];
    this.setState({
      counters,
      index
    });
  };

  onRandom = () => {
    const heads = [...this.state.heads];
    const headIndex = Math.floor(Math.random() * heads.length + 0);
    const bodies = [...this.state.bodies];
    const bodyIndex = Math.floor(Math.random() * bodies.length + 0);
    const feet = [...this.state.feet];
    const feetIndex = Math.floor(Math.random() * feet.length + 0);
    let counters = [...this.state.counters];
    counters[0].head = heads[headIndex];
    counters[0].body = bodies[bodyIndex];
    counters[0].feet = feet[feetIndex];

    this.setState({
      counters
    });
  };

  render() {
    return (
      <React.Fragment>
        <main className="container" align="center">
          <button
            onClick={this.onRandom}
            className="btn btn-danger btn-lrg m-4"
          >
            Random
          </button>
          <br />
          {/* <NavBar onTotal={this.totalCount} /> */}
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onRefresh={this.handleRefresh}
            onDelete={this.handleDelete}
            onNextHead={this.NextHeadButton}
            onLastHead={this.LastHeadButton}
            onNextBody={this.NextBodyButton}
            onLastBody={this.LastBodyButton}
            onNextFeet={this.NextFeetButton}
            onLastFeet={this.LastFeetButton}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
