import React from 'react'

function MemoComp({name}) {
    console.log("Rendering memo Component")
    return (
        <div>
            {name}
        </div>
    )
}

export default MemoComp
