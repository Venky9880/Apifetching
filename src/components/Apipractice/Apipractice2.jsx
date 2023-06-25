import { useState } from "react";
import {useEffect} from 'react'
import React from 'react'

const TableRow =({id,login,image})=>{
    return(
    <tr>
        <td>{id}</td>
        <td>{login}</td>
        <td><img src={image} alt="image" style={{width:"100px",height:"150px"}}/></td>
    </tr>)
}

const Apipractice2 = () => {
    let[state,setState]=useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users")
        .then(res=>res.json())
        .then(data=>setState(data))
    })
  return (
    <div>
        <table className='table table-bordered table-striped table-hover w-75 m-auto'>
         <thead>
            <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>User Image</th>
            </tr>
         </thead>
         <tbody>
            {state.map((elem)=>{
                return(
                <TableRow key={elem.id} id={elem.id} login={elem.login} image ={elem.avatar_url}/>
           ) })}
         </tbody>
        </table>
    </div>
  )
}

export default Apipractice2