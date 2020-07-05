import React, { Component } from 'react'

class LifecycleA extends Component {

    // step1
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Nilank'
        }
        console.log('LifecycleA constructor');
        
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default LifecycleA
