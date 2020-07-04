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
        if(this.state.isLoggedIn){
            return (
                <div>Welcome Nilank</div>
            )
        }else {
            return (
                <div>
                    Welcome Guest
                </div>
            )
        }
        // return (
        //     <div>
        //         <div>Welcome Nilank</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
