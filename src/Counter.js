import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5,
    };

    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    console.log("this", this);
    this.setState((currState) => {
      return {
        count: currState.count - 1,
      };
    });
  }

  handleIncrement() {
    console.log("this", this);
    this.setState((currState) => {
      return {
        count: currState.count + 1,
      };
    });
  }

  render() {
    const date = new Date("September 28 2024");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div className="">
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()} - [{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
