import React, { Component } from "react";
  
export default class Counter extends Component {
  shouldComponentUpdate(nextProps) {
  
    if (nextProps.value !== this.props.value) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log("Counter 1 is calling");
    return (
      <div>
        <h2>Counter:</h2>
        <button onClick={this.props.onDecrease}>-</button>
        <h3>{this.props.value}</h3>
        <button onClick={this.props.onIncrease}>+</button>
      </div>
    );
  }
}