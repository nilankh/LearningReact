// forwarding refs
// in this we will use forwarding ref technique to allow the parent component to directly reference the native element
// we have four simple steps
import React, { Component } from 'react'
import FRInput from './FRInput'
class FRParentInput extends Component {

    constructor(props) {
        super(props)
    
        // step1 to create ref
        this.inputRef = React.createRef()
    }
    clickHandler = () => {
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                {/* step2 attach the ref to the child component using the ref attribute */}
                <FRInput ref={this.inputRef} />
                {/* step4 go in see in frInput.js */}
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}
export default FRParentInput
