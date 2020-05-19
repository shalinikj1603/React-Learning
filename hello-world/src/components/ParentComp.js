import React, { Component} from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'
class ParentComp extends Component {
// class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Shalini'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Shalini'
            })
        },2000)
    }
    
    render() {
        console.log('***************parent component')
        return (
            <div>
                Parent Component
                {/* <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp> */}
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentComp
