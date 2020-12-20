// Leccture26 pure components
import React, { Component } from 'react'

class RegularComp extends Component {
    render() {
        console.log("Regular Comp Render")
        return (
            <div>
                Regular Component  {this.props.name}              
            </div>
        )
    }
    
}

export default RegularComp
