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
    // step2
    static getDerivedStateFromProps(props, state){
    // this methd get access to props and state as parameters and has to return new state of null
    console.log('LifecycleA getDerivedStateFromProps');
    
    return  null;
}
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default LifecycleA
