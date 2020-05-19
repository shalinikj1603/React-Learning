import React from 'react'

function MemoComp({name}) {
    console.log('Rendering memo component')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
//react.memo accepts a component adds some things to that component and returns a new enhanced component 
//memo is similar to pure components but it works with functional components instead.
