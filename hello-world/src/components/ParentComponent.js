import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        //alert('Hello' + this.state.parentName)
        alert(`Hello ${this.state.parentName} from  ${childName}`) // feature in ES6
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler ={this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
