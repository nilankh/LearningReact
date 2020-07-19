// Lecute 29 Refswith class COmonents
// refs with class components
// parent component
import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
        super(props)
    // step1
        this.componentRef = React.createRef()
    }
    
    clickHandler = () => {
        this.componentRef.current.focusInput()
    }

    render() {
        return (
            <div>
                {/* step2 ref wala line */}
                <Input ref={this.componentRef}/>
                <button onClick={this.clickHandler} >Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
