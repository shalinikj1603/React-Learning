import React,{Component} from 'react'

class Message extends Component{
//creating a state object
    constructor(){
        super()//call has to be made for base class constructor
        this.state = {
            message:'Welcome Visitor'
        }
    }
    changeMessage()//as state is an object that is privetly maintained inside the component, state can be changed within the component(mutable)
    {
        this.setState({
            message:'Thank you'
        })
    }
   render(){
    // return <h1> Class Component</h1>
          return(
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
          ) 
  
   }
}

export default Message