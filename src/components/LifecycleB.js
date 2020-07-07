import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nilank",
    };
    console.log("LifecycleB constructor");
  }
  // step2
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");

    return null;
  }
// 4th step
  componentDidMount() {
    console.log("LifecycleB ComponentDidMount");
  }

// updatewala
  shouldComponentUpdate() {
    console.log('LifeCycleB shouldComponetUpdate')
    return true;
  }
  // updatewala
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycleB getsnapshotBeforeUpdate')
    return null;
  }
// updatewala
  componentDidUpdate() {
    console.log('LifecycleB componentDidUpdate')
  }


  
  render() {
    console.log("LifeCycleB render");
    return (
        <div>LifecycleB</div>
    )
  }
}
export default LifecycleB;
