import React from 'react';

// function Greet() {
//     return <h1>Hello Nilank</h1>
// }

// this props we can name it anything we want to, but conventional is to write props
const Greet = (props) => {
    console.log("props",props);
    return <h1>Hello {props.name}</h1>
}
// this is termed as named export
// export const Greet = () => <h1>Hello Nilank</h1>
export default Greet;