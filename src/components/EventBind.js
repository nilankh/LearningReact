// Binding event handlers
import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello"
        }
        // 3rd way of binding in class contructor
        // this.clickHandler = this.clickHandler.bind(this);
    }
    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log("this", this);
    //     // this keyword within our event handler is undefined and thaty event binding is necessary in react class components 
    // }


    // final and 4approach is to use an arrow function as a class property basically change the way you define your method in the class
    clickHandler = () => {
        this.setState({
            message: 'Nikal pehli fursat me nikal jarurt ni h is desh ko teri'
        })
    }
    render() {
        
        return (
            <div>
                <div>{this.state.message}</div>
                 {/* approach1 in render method */}
                {/* <button onClick={this.clickHandler.bind(this)} >Click</button> */}

                {/* approach2 using arrow function in rendered method*/}
                {/* <button onClick={()=> this.clickHandler()} >Click</button> */}

                {/* 3rd approach binding in class constructor */}
                <button onClick={this.clickHandler} >Click</button>
            </div>
        )
    }
}

export default EventBind
