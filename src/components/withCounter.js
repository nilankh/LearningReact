// higher order component part2
import React from "react";

// THe Hoc accepts the original component as its parameter the hoc also returns a new component so within the function body let's create a new component
// the original component is refereed to as wrapped componet
const withCounter = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return NewComponent;
};

export default withCounter;
// it  is a function that accepts the original component and return new component
