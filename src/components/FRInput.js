// Forwarding Refs lecture 30
import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             <input type="text" />
//         </div>
//     )
// }

// 3rd step we need to forward this ref to input elmenet in the child component & ref forwarding can be acheived using forward ref method using react library


// arrow function is passed as a parameter to the forward ref method
// we know that every functional component receives props as its parameter, when a component is passed as a parameter to the create ref method it receives the ref attribute as its second parameter
const FRInput = React.forwardRef((props, ref) => {
    return(
        <div>
            <input type="text" ref={ref} />
            {/* this ref parameter will point to the value of ref attribute from the parent component, in other words the ref is beng forwared from the parent component to the native input element */}
        </div>
    )
}) 
export default FRInput
