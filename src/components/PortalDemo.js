// portals

import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    // create portal and the method takes two parameters, first parameter is jsx which u want to render  which is heading portals, second parameter is the Dom node to mount the element on to
    return ReactDOM.createPortal (
        <h1>
            Portals Demo
        </h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo

// portals se hm index.html me do div ke saath render kr skte h jo ki aise possible ni h, next question is why do we need them