import React, { Component } from 'react'
//Conditional rendering
class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
    
        //short circuit operator
        return this.state.isLoggedIn && <div>Welcome Shalini</div>

        //Ternary conditional operator
        // return(
        //     this.state.isLoggedIn?
        //     (<div>Welcome Shalini</div>):( <div>Welcome Guest</div>)
        // )

        //element variables
        // let message
        // if(this.state.isLoggedIn){
        //   message = <div>Welcome Shalini</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>


        //if/else
        // if (this.state.isLoggedIn){
        //     return(
        //     <div>Welcome Shalini</div>
        //     )
        // }
        // else{
        //     return(
        //     <div>Welcome Guest</div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>Welcome Shalini</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
