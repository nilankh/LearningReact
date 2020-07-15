import React, { Component } from 'react'

class Rough extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "hello ji"
        }
    }
    // clickHandler() {
    //     this.setState({
    //         message: 'Chalo by beta'
    //     })
        
    // }
    clickHandler = () => {
        this.setState({
            message: 'Chalo by beta'
        })
        
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click kro na</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Rough
