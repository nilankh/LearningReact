import React, { Component } from "react";

class Rough extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
        
    return this.state.isLoggedIn && <div>Welcome Nilank</div>


    // return this.state.isLoggedIn ? (
    //   <div>welocme Nilank</div>
    // ) : (
    //   <div>welocme Guest</div>
    // );







    // let message;
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome Nilank</div>
    // }else{
    //     message = <div>Welcome Guests</div>
    // }
    // return <div>{message}</div>





    // if (this.state.isLoggedIn) {
    //   return <div>Welcome nilank</div>;
    // } else {
    //   return <div>welcome guest</div>;
    // }
  }
}

export default Rough;
