// since we are learning about state in class component this is going to be a class component

import React, { Component } from 'react'

class Counter extends Component {

    // itna likhne ka jaruri ni just rconst enter
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0         
        }
    }
    
    increment() {

        // suppose if we will not use setStatee then what will happen the count value will be changed but it will not be showed in ui, that means ui is not rendering, whenever the state is changing and this is the main reason we should never modify the state directly
        // this.state.count = this.state.count + 1
        // console.log(this.state.count);

        // the only place where you can assign this. is the constructor, any other time to change the state setstate method has to be used

        
        
    }

    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
