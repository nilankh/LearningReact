// Refs with class components
// child componet of FocusInput
import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
    // step1
        this.inputRef = React.createRef()
    }
    
    focusInput() {
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                {/* step2 ref wala line */}
               <input type="text" ref={this.inputRef} /> 
            </div>
        )
    }
}

export default Input
