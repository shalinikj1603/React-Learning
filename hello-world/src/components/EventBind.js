import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'hello'
        }

        //this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message : 'Goodbye!'
    //     })
    // }

    clickHandler=() => {
        this.setState({
            message : 'Goodbye'
        })
    }
    
    //1st button approach binding in the render method
    //2nd approach arrow function 
    //3rd approach binding the event handler in constructor
    //4th approach using arrow function as a class property
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
