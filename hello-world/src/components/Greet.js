import React from 'react'

// function Greet(){
//     return <h1>Hello Shalini</h1>
// }

//usage of props
// const Greet = (props) => {
//     console.log(props)
// return (
// <div>
//     <h1>
//          {props.name} a.k.a {props.heroname}
//     </h1>
//     {props.children}
// </div>
// )
// }

//destructuring the functional component
// const Greet = ({name,heroname}) => {
// return (
// <div>
//     <h1>
//         Hello {name} a.k.a {heroname}
//     </h1>
// </div>
// )
// }

//restructuring in the functional body
const Greet = props => {
    const {name , heroname} = props
    return (
    <div>
        <h1>
            Hello {name} a.k.a {heroname}
        </h1>
    </div>
    )
}
    

export default Greet