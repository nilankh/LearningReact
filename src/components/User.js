// LECTURE37 render props(part2) video
import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                {/* {this.props.name(true)} */}
                {this.props.render(true)}
            </div>
        )
    }
}

export default User
