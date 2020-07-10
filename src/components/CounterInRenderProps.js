// renderprops part2

import React, { Component } from 'react'

class CounterInRenderProps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default CounterInRenderProps
