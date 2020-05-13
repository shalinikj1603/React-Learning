import React, { Component } from 'react'

 class LifecycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Shalini'
         }
         console.log('LifecycleB Constructor')
     }

     static getDerivedStateFromProps(props,state){
         console.log('LifecycleB getDerivedStateFromProps')
         return null
     }
     componentDidMount(){
         console.log('LifecycleB componentDidMount')
     }
     
    render() {
        console.log('LifecycleB Render')
        return (
            <div>
                <div>LifecycleB</div>
            </div>
        )
    }
}

export default LifecycleB
