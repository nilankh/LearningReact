// how state can be used in class components

import React, { Component } from 'react';
// class component 



class Message extends Component {
    // ye q sikh rhe h q ki hme pta h props immutable h toa how we can change by learning about state and thts the steps we are writing below
    // First step is to create a state object and intialize it, and this step is usually done inside the class constructor

    constructor() {
        super()//this is required because we extended reacts component class and call has to be made to the base class constructor and then we create our state object
        this.state = {
            message: 'Welcome Visitor'

        }
    }


    render() {
    return (
        <h1>
            {/* Welcome Visitor */}
            {/* second step is to bind this state vaue in render function adn we do this very similar to props */}
            {this.state.message}
        </h1>
    )
    }
}

export default Message;