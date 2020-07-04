import React from 'react'

function NamList() {
    const names = ['Brue', 'Clark', 'Diana']
    return (
        <div>
            {/* 1st way to render  */}
           {/* <h2>{names[0]}</h2> 
           <h2>{names[1]}</h2> 
           <h2>{names[2]}</h2>  */}
           
           {/* 2nd way to render via map method */}

           {
               names.map(name => <h2>{name}</h2>)
           }
        </div>
    )
}

export default NamList
