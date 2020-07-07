import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  // step1
  constructor(props) {
    super(props);

    this.state = {
      name: "Nilank",
    };
    console.log("LifecycleA constructor");
  }
  // step2
  static getDerivedStateFromProps(props, state) {
    // this methd get access to props and state as parameters and has to return new state of null
    console.log("LifecycleA getDerivedStateFromProps");

    return null;
  }

// 4th method
  componentDidMount() {
      console.log('LifecycleA ComponentDidMount');
      
  }

  // updatewala
  shouldComponentUpdate() {
    console.log('LifeCycleA shouldComponetUpdate')
    return true;
  }
  // updatewala
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycleA getsnapshotBeforeUpdate')
  }
// updatewala
  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate')
  }

  // then third method is render
  render() {
    console.log("LifeCycleA render");
    return (
    <div>
        <div>LifecycleA</div>
        {/* lifecycleA as the parent component  */}
        <LifecycleB />
        {/* lifecycleB is the child component */}
    </div>
    )
  }
}

export default LifecycleA;
