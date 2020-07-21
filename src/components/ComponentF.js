// LECTURE 39
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
                        // we are passing a function as a child to the consumer component, the coonsumner component tells component F hey you need  the user name right let me provide
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentE

// final step3 is to consume the user name in the desired component for our demo we need to consume the user name value in component F to consume a context value we need to use consumer component so in component F in render method as part of returtn statement