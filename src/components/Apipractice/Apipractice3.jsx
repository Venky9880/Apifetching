import React from 'react'
import { useState,useEffect } from 'react'
import BasicExample from './Card'

const Apipractice3 = () => {
  let[state,setState]=useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users")
        .then(res=>res.json())
        .then(data=>setState(data))
    })
    {state.map((elem)=>{
  return (
    <div>
    <BasicExample key={elem.id} id={elem.id} image ={elem.avatar_url}/>
    </div>
    ) }) } 
}
export default Apipractice3