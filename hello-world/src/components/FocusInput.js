import React, { Component } from 'react'
import Input from './Input'
//refs cannot be applied functional component
class FocusInput extends Component {
    constructor(props) {
        super(props)
    
        this.componentRef=React.createRef()
       
    }

    clickHandler = () => {
        this.componentRef.current.focusInput()
    }


    
    render() {
        return (
            <div>
                <Input ref={this.componentRef} ></Input>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
