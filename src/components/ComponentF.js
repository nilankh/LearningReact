import React, { Component } from 'react'


class ComponentE extends Component {
    render() {
        return (
            <UserConsumr>
                {
                    (username) => {
                        return <div>Hello {username}</div>
                    }
                }
            </UserConsumr>
        )
    }
}

export default ComponentE
