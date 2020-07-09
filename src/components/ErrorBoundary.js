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

    // this method is pretty much used to log the errors
    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
        // in development mode react automatically logs every error tot he console
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

// the placement of error boundary is completely upto u, you can wrap just the top level component or wrap any nested individual components so that only that component has fallback ui, leaving the rest of ur user interface workingas expected
export default ErrorBoundary
