import React, { Component } from 'react'
import { UserConsumer } from './userContext'
// step3 in the component where the user  name is required use the consumeer component and pass in a function as its child the function receives  the context calue as its parameter which can then be used to return the desired JSX
class ComponentE extends Component {
    render() {
        return (
            <UserConsumer>
                {

                    (username) => {
                        return <div>Hello {username}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentE
