import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from './userContext'//context part3 me aaya
// class ComponentE extends Component {
//   render() {
//     return <ComponentF />;
//   }
// }

class ComponentE extends Component {

  static contextType = UserContext//this line same as line no22 contexxtpart3 me aaya
  // for using line no 12 there are two limitation the first one is that it only works with class component, the second limit is that u can only subsribe to a single context using context type, many times in ur application you need to read more than one context in which scenario the consumer component is the way to go 
  render() {
    return(
      <div>
        Componet E context {this.context}
        <ComponentF />
      </div>
    ) 
  }
}
// ComponentE.contextType = UserContext//context part3 meeaaya
export default ComponentE;
