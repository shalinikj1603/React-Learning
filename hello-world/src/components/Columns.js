import React from 'react'
//Fragments let u group  list of childrens without adding extra nodes to the DOM
//React Fragments can we represented as <></> aswell but the disadvantage is cannot pass the key 
function Columns() {
    const items=[]
    return (
        <React.Fragment>
            {
                items.map(item =>(
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        {/* <p>Key attribute is the only attribute that can be used in the ReactFragments</p> */}
                <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Shalini</td>
            </React.Fragment>
    )
}

export default Columns
