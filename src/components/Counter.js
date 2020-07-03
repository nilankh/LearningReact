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

        // this.setState({
        //     count: this.state.count + 1
        // }, () => {console.log('Callback value', this.state.count)})
        // console.log(this.state.count);
        // console value will 1 less than the rendered value and this is bcz call to set state is asynchronous, so what is happening, console .log  over here is beign called before the state is actuallly set, many a times in your application you might want to execute some only after the state has been updated to handle such a situation you can pass in call back function as the second parameter to the set state method so set state method has two parameters, first is state object and second parameter is the call back function, the call function will be an arrow function
    




        this.setState((prevState, props) => ({
            count: prevState.count + 1 
        })) 
        console.log(this.state.count);
    
    
    }

    incrementFive() {
        // react multiple set calll ko single update me kr deta h for better performance
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
