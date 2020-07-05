import React from 'react'

// created object and apply it to the style attribute inline styling
const heading = {
    fontSize: '72px',
    color: 'blue'
}
function Inline() {
    return (
        <div>
            <h1 className='error'>Error</h1>
            <h1 style={heading}>INLINE</h1>
        </div>
    )
}

export default Inline
