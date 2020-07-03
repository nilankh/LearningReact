import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello"
        }
    }
    clickHandler() {
        this.setState({
            message: 'Goodbye!'
        })
        console.log("this", this);
        // this keyword within our event handler is undefined and thaty event binding is necessary in react class components 
    }
    render() {
        
        return (
            <div>
                <div>{this.state.message}</div>
                 {/* approach1 in render method */}
                {/* <button onClick={this.clickHandler.bind(this)} >Click</button> */}

                {/* approach2 */}
                <button onClick={()=> this.clickHandler()} >Click</button>
            </div>
        )
    }
}
// second method is to use arrow function in render method
export default EventBind
