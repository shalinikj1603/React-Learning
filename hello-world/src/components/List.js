import React from 'react'
import Person from './Person'

function List() {
    const names =['Bruce','Clark','Diana','Bruce']
    const namelist =  names.map((name, index)=> <h2 key={index}>{index}{name}</h2>)
return <div>{namelist}</div>
    // return (
    //     <div>
    //         {/* <h2>{names[0]}</h2>
    //         <h2>{names[1]}</h2>
    //         <h2>{names[2]}</h2> */}
    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }
    //     </div>
    // )
    

    // const persons =[
    //     {
    //         id:1,
    //         name:'Bruce',
    //         age:31,
    //         skill:'React'
    //     },
    //     {
    //         id:2,
    //         name:'clark',
    //         age:30,
    //         skill:'python'
    //     },
    //     {
    //         id:3,
    //         name:'Diana',
    //         age:30,
    //         skill:'Angular'
    //     }
    // ]
    // const personlist = persons.map(person => (<Person key ={person.id} person={person}></Person>)
    //     // (
    //     //     <h2>
    //     //         Iam {person.name}.Iam {person.age} years old.I know {person.skill}
    //     //     </h2>
    //     // )
    // )
    // return <div>{personlist}</div>
}

export default List
