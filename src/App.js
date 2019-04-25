import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import h1 from "./img/heads/h1.png";
import h2 from "./img/heads/h2.png";
import h3 from "./img/heads/h3.png";
import b1 from "./img/bodies/b1.png";
import b2 from "./img/bodies/b2.png";
import b3 from "./img/bodies/b3.png";
import f1 from "./img/feet/f1.png";
import f2 from "./img/feet/f2.png";
import f3 from "./img/feet/f3.png";
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
    const heads = [h1, h2, h3];
    const bodies = [b1, b2, b3];
    const feet = [f1, f2, f3];
    let index = Math.floor(Math.random() * heads.length + 0);
    console.log(heads.length);
    let counters = [...this.state.counters];
    counters[0].head = heads[index];

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

  NextButton = () => {
    const heads = [...this.state.heads];
    let index = [this.state.index];
    index++;
    let counters = [...this.state.counters];
    counters[0].head = heads[index];

    this.setState({
      counters,
      index
    });
  };

  LastButton = counter => {
    const heads = [...this.state.heads];
    let index = [this.state.index];
    index--;
    let counters = [...this.state.counters];
    counters[0].head = heads[index];

    this.setState({
      counters,
      index
    });
  };

  // totalCount = () => {
  //   let total = 0;
  //   for (let i = 0; i < this.state.counters.length; i++) {
  //     total = total + this.state.counters[i].value;
  //   }
  //   return total === 0 ? "Zero" : total;
  // };

  render() {
    return (
      <React.Fragment>
        <main className="container" align="center">
          {/* <NavBar onTotal={this.totalCount} /> */}
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onRefresh={this.handleRefresh}
            onDelete={this.handleDelete}
            onNext={this.NextButton}
            onLast={this.LastButton}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
