// lecture13
import React from 'react'

// to use react snippet for functional component rfce
// react events are named using camel case rather than lower case
// with jsx you pass a function as the event handler
function FunctionClick() {
  function clickHandler() {
    console.log('button Clicked')
  }
  return (
    <div>
      {/* clickhandler we want handler to be a function and not a function call clickHandler() w  */}
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}
// eventHandler is a function and not a function call do not add parenthesis
// q ki agar parenthesis add kar doge toa kya hoga, console open kro bina click ke hi button clicked output aa jyga jo hme ni chahiye
export default FunctionClick
