import React, { Component } from 'react'

class HoverCounterTwo extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }

    // incrementCount = () =>{
    //     this.setState(prevState =>{
    //         return {count : prevState.count + 1}
    //     })
    // }

    render() {
        // const {count} = this.state
        // return <h2 onMouseOver={this.incrementCount}>Hovered  {count} Times</h2>
        const {count,incrementCount} = this.props
        return <h2 onMouseOver={incrementCount}>Hovered  {count} Times</h2>
    }
}

export default HoverCounterTwo

//Context - provides a way to pass the  data through the component tree without having to  pass props down manually at every level