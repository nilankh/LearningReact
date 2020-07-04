import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* By passing method as props as a child component */}
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
