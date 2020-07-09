// higher order components(part1)
import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class ClickCounter extends Component {
  
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.incrementCount}>{this.props.name} Click {count} times</button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter)
