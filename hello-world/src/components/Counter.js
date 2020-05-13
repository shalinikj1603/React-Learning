import React, { Component } from 'react'
//snippet for constructor rconst
class Counter extends Component {
 
    //to initialize contructor using state
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    // Always make use of setStae and never modify the state directly
    increment(){
       // this.state.count=this.state.count+1
       // console.log(this.state.count)
       //to increase the count value and render in UI with set state: let us know to rerender the component
    //  this.setState(
    //      {
    //      count: this.state.count+1 // object which set the state value-first parameter
    //      }, 
    //      () => {
    //          console.log('Callback value',this.state.count) // 2nd param,arrow function where we log updated state count value
    //         }
    //     )
    //when u have to update the state based on the previous state make sure to pass function as argument instead a regular object
    this.setState((prevState,props) => ({
        count :prevState.count + 1
    }))
     console.log(this.state.count)
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }
    
    render() {
        return (
        <div>
           <div>Count -{this.state.count} </div> 
           {/* <button onClick={() => this.increment()}>Increment</button> */}
           <button onClick={() => this.incrementFive()}>Increment</button>

        </div>
        )
    }
}

export default Counter
