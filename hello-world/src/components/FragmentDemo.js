import React from 'react'

function FragmentDemo() {
    //to return mutilple elements we need enclosing div tag
    //to restructure DOM we have React.Fragment
    return (
        <React.Fragment>
             <h1> FragmentDemo</h1>
          <p>This is the demonstration on Fragments</p>
        </React.Fragment>
    )
}

export default FragmentDemo
