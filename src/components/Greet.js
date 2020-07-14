// first lecture

import React from 'react';
// Functional component


// function Greet() {
//     return <h1>Hello Nilank</h1>
// }

// this props we can name it anything we want to, but conventional is to write props
// const Greet = (props) => {
//     console.log("props",props);
//     //  props.name = 'Neel'
//     // we can assign anything to props because props are immutuable
//     return( 
//         <div>
//             <h1>
//                 Hello {props.name} {props.heroname}
//             </h1>
//             {props.children}
//         </div>
//     )
// }


// destructiing in functional component
// const Greet = ({name, heroname}) => {
    
//     return( 
//         <div>
//             <h1>
//                 Hello {name} {heroname}
//             </h1>
           
//         </div>
//     )
// }

// destructure in function body 
const Greet = (props) => {
    const { name, heroname } = props
    return( 
        <div>
            <h1>
                Hello {name} {heroname}
            </h1>
           
        </div>
    )
}

// this is termed as named export
// export const Greet = () => <h1>Hello Nilank</h1>


export default Greet;

