// Lecute 28 Refs
import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    // step1 is create ref
    this.inputRef = React.createRef()
        // it is common to create ref in the constructor so that it can be referenced thoright out the component

         
        // step1(second method) to set refs which is called a callback refs
        this.cbRef = null 
        // cb means call back
        
        // step(2)second method we create a method that will assign a dom element to the ref we have just created in step1
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }
    componentDidMount(){

        // step3 is to call the focus method on this input element
        // this.inputRef.current.focus()
        // console.log(this.inputRef);


//step4(second method) react will call the ref callback with the dom element when the components mounts and call it with null when it unmount that is the reason it is really important to check if a value exists on the reference property and that is not null so in component
        if(this.cbRef) {
            this.cbRef.focus()
        }

    }

    clickHanlder = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                 {/* step2 is to attach this ref to our input element in render method, to attach a ref we make use of the reservd ref attribute */}
                 {/* if u will console it out the ans will come Object*/}
                <input type="text" ref={this.inputRef} />
                {/* step3 is to call the focus method on this input element */}

                {/* step3(second) is to attach this ref to input element*/}
                <input type="text" ref={this.setCbRef} />
                

                <button onClick={this.clickHanlder}>Click </button>
            </div>
        )
    }
}

export default RefsDemo
//  with create Reactref approach you create a reference using react.createRef
    // in create ref approach we attach the reference to an element, using ref prop and assigning the property


    // finally in create ref approach the element can be accessed using this.referencevariable.current 






// with seocond call back ref approach you first create a property and then create a method that assigns the property with a dom element passed as a parameter in, 
// in callback ref approach we attach the ref to an element using the method that turns assigns the element to the property,
// and in callback approach it is directly accessed using this.reference variable

