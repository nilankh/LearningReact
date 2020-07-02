import React from 'react';

// function Greet() {
//     return <h1>Hello Nilank</h1>
// }

// this props we can name it anything we want to, but conventional is to write props
const Greet = (props) => {
    console.log("props",props);
    // props.name = 'Neel'
    // we can assign anything to props because props are immutuable
    return( 
        <div>
            <h1>
                Hello {props.name} {props.heroname}
            </h1>
            {props.children}
        </div>
    )
}
// this is termed as named export
// export const Greet = () => <h1>Hello Nilank</h1>
export default Greet;