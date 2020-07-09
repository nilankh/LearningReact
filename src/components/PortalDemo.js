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
