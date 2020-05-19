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

     shouldComponentUpdate(){
         console.log('LifecycleA shouldComponentUpdate')
         return true
     }
     
     getSnapshotBeforeUpdate(){
         console.log('LifecycleA  getSnapshotBeforeUpdate')
         return null
     }
     componentDidUpdate(){
         console.log(' LifecycleA componentDidUpdate')
     }

    onChangeState =() =>{
        this.setState({
            name:'React'
        })
    }

    render() {
        console.log('LifecycleA Render')
        return (
            <div>
               <div> LifecycleA </div> 
               <button onClick={this.onChangeState}>Change</button>
               <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default LifecycleA
