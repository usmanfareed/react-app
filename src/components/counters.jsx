import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 1,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
    ],
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleResetCounter}>
          Rest Counter
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            selected={true}
            deleteCounter={this.handleDeleteCounter}
            incrementCount={this.handleIncrementCount}
          >
            <h3>Hello {counter.id}</h3>
          </Counter>
        ))}
      </div>
    );
  }

  handleDeleteCounter = (e) => {
    let counters = this.state.counters.filter((x) => x.id !== e);
    this.setState({
      counters,
    });
  };

  handleResetCounter = () => {
    const newCounter = this.state.counters;
    newCounter.forEach((x) => (x.value = 0));

    this.setState({
      counters: newCounter,
    });
  };

  handleIncrementCount = (e) => {
    const counters = [...this.state.counters];
    counters.find((x) => x.id === e).value++;

    this.setState({
      counters,
    });
    // this.state.list.push(this.state.count + 1);
  };
}
// export function onDelete(e) {
//   let counters = this.state.counters.filter((x) => x.id === e);
//   this.setState({
//     counters,
//   });
// }
export default Counters;
