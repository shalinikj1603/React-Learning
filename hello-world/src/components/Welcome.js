import React,{Component} from 'react'

// class Welcome extends Component{
//    render(){
//     // return <h1> Class Component</h1>
//    return <h1>Welcome {this.props.name} a.k.a {this.props.heroname}</h1>
//    }
// }

class Welcome extends Component{
    render(){
        const{name,heroname} = this.props
       // const{state1,state2} = this.state // syntax if we have state components
        return <h1>Welcome {name} a.k.a {heroname}</h1>
    }
 }

export default Welcome