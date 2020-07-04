import React, { Component } from 'react'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }
        this.greetParennt = this.greetParennt.bind(this)
    }

    greetParennt() {
        alert(`Hello ${this.state.parentName}`)
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ParentComponent
