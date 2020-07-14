// second lecture
import React, { Component } from 'react';
// class component 


// class Welcome extends Component {
//     render() {
//     return (
//         <h1>
//             Welcome {this.props.name} {this.props.heroname}
//         </h1>
//     )
//     }
// }


// In class component we  generally tend to destruture props or state in render method
class Welcome extends Component {
    render() {
        const { name, heroname } = this.props
        return (
            <h1>
                Welcome {name} {heroname}
            </h1>
        )
    }
}


export default Welcome;