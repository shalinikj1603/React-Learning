import React from 'react'

//share common functionality between components
//higher order component
//A pattern where a function takes a component as a argument and returns a new component
//Ex : const newComponent = higherOrderComponent(original component)

const UpdatedComponent = (OriginalComponent,IncrementNumber) =>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
    
        // incrementCount =() =>{
        //     this.setState(prevState =>{
        //         return {count : prevState.count+1}
        //     })
        // }
        //passing paramete to HOC component
        incrementCount =() =>{
            this.setState(prevState =>{
                return {count : prevState.count+IncrementNumber}
            })
        }


        render(){
            console.log(this.state.props)
            return <OriginalComponent
            count ={this.state.count}
            incrementCount={this.incrementCount}
            {... this.props}
            ></OriginalComponent>
            //we should not forget to pass remaining component to Higher Order Components 
            //for example here we have passed name to clickcounter and that should be passed to original component
        }
    }
    return NewComponent

}

export default UpdatedComponent