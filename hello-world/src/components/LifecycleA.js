import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Shalini'
         }
         console.log('LifecycleA Constructor')
     }

     static getDerivedStateFromProps(props,state){
         console.log('LifecycleA getDerivedStateFromProps')
         return null
     }
     componentDidMount(){
         console.log('LifecycleA componentDidMount')
     }
     
    render() {
        console.log('LifecycleA Render')
        return (
            <div>
               <div> LifecycleA </div> 
               <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default LifecycleA
