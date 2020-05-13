import React from 'react'

const Hello = () => {
    // return(
    //     <div className : 'dummyclass'>
    //         <h1> Hello Shalini</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id : 'hello',className : 'dummyclass'},// object of key value pairs that will be applied to the element.
        React.createElement('h1',null,'Hello Shalini'))
}

export default Hello