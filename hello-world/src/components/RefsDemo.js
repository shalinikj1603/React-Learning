import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    //with createref approach we create a reference using react.creatref
        this.inputRef = React.createRef()
    //with callback ref approach you first create a property and then create a method that assigns the property with the DOM element that assigns the parameter
        this.cbref = null
        this.setcbref = (element)=>{
            this.cbref=element
        }
         
        
    }

    componentDidMount(){
        //call back ref approach
        if(this.cbref){
            this.cbref.focus()
        }
        //create ref approach
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    
    render() {
        //reserved ref attribute
        return (
            <div>
                <input type='text' ref={this.inputRef}></input>
                <input type='text' ref={this.setcbref}></input>
                <button onClick={this.clickHandler}>Button</button>
            </div>
        )
    }
}

export default RefsDemo
