import React from 'react'
import './myStyles.css'
// function Stylesheet() {
function Stylesheet(props) {    
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            {/* <h1 className='primary'>Stylesheets</h1> */}
            {/* <h1 className={className}>Style Sheets</h1> */}
            {/* if u want to use multiple css in then use template literals */}
            <h1 className={`${className} font-xl`}>Style Sheets</h1>
        </div>
    )  
}

export default Stylesheet
