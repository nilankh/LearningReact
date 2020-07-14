// lecture3
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
    // return React.createElement('div', null, 'Hello Nilank')
    // return React.createElement('div', null, 'h1','Hello Nilank') ye krne se v h1 render ni hua! toa iske lia neeche wala line
    // return React.createElement(
    //     'div', 
    //     null, 
    //     React.createElement('h1','null','Hello Nilank')
    // )

    // Learning about second parameter
    return React.createElement(
        'div', 
        {id: 'hello', className:'dummyclass'}, 
        React.createElement('h1','null','Hello Nilank')
    )
}


export default Hello;