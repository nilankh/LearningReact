// LECTURE34 higher order component part2
import React from "react";

// THe Hoc accepts the original component as its parameter the hoc also returns a new component so within the function body let's create a new component
// the original component is refereed to as wrapped componet
const withCounter = (WrappedComponent, incrementNumber) => {
//   withComponet replaced NewComponent 
    class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };
    render() {
        console.log(this.props.name);
        
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
    
        />
        // when u create please make sure to pass rest of the props
      );
    }
  }
  return WithCounter;
};

export default withCounter;
// it  is a function that accepts the original component and return new component
