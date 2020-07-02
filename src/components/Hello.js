import React from 'react';

// this is the jsx version of hello component
// const Hello = () => {
//     return (
//         <div>
//             <h1>Hello Nilank</h1>
//         </div>
//     )
// }

// Writing without jsx componet
const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Nilank</h1>
    //     </div>
    // )
    return React.createElement('div', null, 'Hello Nilank')
}


export default Hello;