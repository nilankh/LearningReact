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
    
    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button>Increment</button>
            </div>
        )
    }
}

export default Counter
