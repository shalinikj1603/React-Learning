import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
  
    // render(){
    //     const {count} =this.state
    //     return <button onClick={this.incrementCount}>Clicked {count} Times</button>

    // }

    render() {
        const {count,incrementCount}=this.props
        return <button onClick={incrementCount}>
        {this.props.name}  Click {count} Times</button>
            
    }
}

export default UpdatedComponent(ClickCounter,5)
