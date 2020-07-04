import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    // I want to see the message If isLogged in is true then we have to display Welcome nilank otherwise welcome Guest
    render() {


        // Second method Elements variables approach
        let message 

        if(this.state.isLoggedIn){
            message = <div>Welcome Nilank</div>
        }else{
            message = <div>Welcome Guests</div>
        }

        return <div>{message}</div>


        // 1st method of condtional rendering
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>Welcome Nilank</div>
        //     )
        // }else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
    }
}

export default UserGreeting
