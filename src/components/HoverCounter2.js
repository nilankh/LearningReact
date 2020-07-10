// Render props lecture
import React, { Component } from "react";

class HoverCounter2 extends Component {
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1 onMouseOver={this.incrementCount}>Hovered {count} times</h1>
      </div>
    );
  }
}

export default HoverCounter2;
