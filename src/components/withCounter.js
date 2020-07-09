// higher order component part2
import React from 'react'

// THe Hoc accepts the original component as its parameter the hoc also returns a new component so within the function body let's create a new component
const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        render() {
            return <OriginalComponent />
        }
    }
    return NewComponent
}

