// lecture no 10
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
            // initialised property

        }
    }
    changeMessage() {
        // when we have to change state of component we need to use setState
        
        this.setState({
            message:'Thank you for subscribing'
        })
        // this methods accepts an object which is nothing but new state of the component in the new state all we need is the message to ty for subscribing
    }

    render() {
    return (
        <div>
            <h1>
                {/* Welcome Visitor */}
                {/* second step is to bind this state vaue in render function adn we do this very similar to props */}
                {this.state.message}

            </h1>
            {/* steps3 at HTML element for a button element */}
                <button onClick= {() => this.changeMessage()} >Subscribe</button>

        </div>
        
    )
    }
}
// A state is nothing but an object that is privately mainted inside a component, a state can influence whast is rendered in browser and state can be changed within the component
export default Message;