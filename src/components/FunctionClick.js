import React from 'react'

// to use react snippet for functional component rfce
// react events are named using camel case rather than lower case
// with jsx you pass a function as the event handler
function FunctionClick() {
    function clickHandler() {
        console.log("button Clicked");
        
    }
    return (
        <div>
          <button onClick={clickHandler}>Click</button>      
        </div>
    )
}

export default FunctionClick
