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


  shouldComponentUpdate() {
    console.log('LifeCycleB shouldComponetUpdate')
    return true;
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycleB getsnapshotBeforeUpdate')
  }

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
