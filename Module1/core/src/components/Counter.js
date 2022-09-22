import React, { PureComponent } from "react";
  
export default class Counter extends PureComponent {

  render() {
    const {onDecrease, onIncrease, value} = this.props
    return (
      <div>
        <h2>Counter:</h2>
        <button onClick={onDecrease}>-</button>
        <h3>{value}</h3>
        <button onClick={onIncrease}>+</button>
      </div>
    );
  }
}