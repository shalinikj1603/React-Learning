import React, { Component } from 'react'
import FrInput from './FrInput'

class FrParentInput extends Component {
    constructor(props) {
        super(props)
    this.inputRef=React.createRef()
    }

    clickhandler=()=>{
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <FrInput ref={this.inputRef}></FrInput>
                <button onclick={this.clickhandler}>Focus Input</button>
            </div>
        )
    }
}

export default FrParentInput
