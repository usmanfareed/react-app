import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: this.props.counter.value,
    list: [],
  };

  render() {
    console.log(this.props);

    return (
      <React.Fragment>
        <div>{this.props.children}</div>
        <span style={this.styles} className="badge badge-primary m-2">
          {/* {this.state.count} */}
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.incrementCount(this.props.counter.id)}
          className="btn btn-secondary btn-lg"
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.deleteCounter(this.props.counter.id);
          }}
          className="btn btn-danger"
        >
          Delete
        </button>

        {/* <ul>
          {this.state.list.map((item) => (
            <React.Fragment>
              <li key={item}>{item}</li>
              <button onClick={() => this.clickedId(item)}>{item}</button>
            </React.Fragment>
          ))}
        </ul> */}
      </React.Fragment>
    );
  }

  formatCount() {
    const { count: itemCount } = this.state;
    return itemCount === 0 ? "Zero" : itemCount;
  }

  // incrementCount = () => {
  //   // let counter = (this.state.count = this.state.count + 1);
  //   // if (counter === 10) {
  //   //   counter = "Ten";
  //   // }
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  //   this.state.list.push(this.state.count + 1);
  // };
}

export default Counter;
