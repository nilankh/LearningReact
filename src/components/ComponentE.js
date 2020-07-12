import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from './userContext'//context part3 me aaya
// class ComponentE extends Component {
//   render() {
//     return <ComponentF />;
//   }
// }

class ComponentE extends Component {
  render() {
    return(
      <div>
        Componet E context {this.context}
        <ComponentF />
      </div>
    ) 
  }
}
ComponentE.contextType = UserContext//context part3 meeaaya
export default ComponentE;
