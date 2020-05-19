import React from 'react'

// function FrInput() {
//     return (
//         <div>
//             <input type='text'></input>
//         </div>
//     )
// }
//Forwarding Ref
//ref parameter will point to the ref attribute from parent component
const FrInput =React.forwardRef( (props,ref)=>{
    return(
        <div>
            <input type='text' ref={ref}></input>
        </div>
    )
})

export default FrInput
