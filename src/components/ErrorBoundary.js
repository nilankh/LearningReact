import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    
    // it receives the error as a parameter within the body we are simply going to return the new state object
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
        if(this.state.hasError){
            return <h1>Something went Wrong</h1>
        }
        return this.props.children
        // this.props.children refers to the component we are actually rendering this
    }
}

// hmesha error dikhaea hi q ki react team aisa banaya hi h lekin ek cut button hofa uspe click kroge toa ui pe show krega
// ErrorBoundary will catch the error and display a fallback ui which in our case is text something went wrong
export default ErrorBoundary
