import React from 'react'
import {useState,useEffect} from 'react'


const Effect = () => {
    let [num,setNum]=useState(1)
    let [state,setState]=useState("reactjs")
    console.log("re-rendered")
    useEffect(()=>{
    alert("component re-rendered ,useEffect() executed")
    
    },[state,num])

  return (
    <div>
        <h1>NUmber:{num}</h1>
        <h1>Welcome To useEffect() HOOk</h1>
        <button onClick={()=>setNum(num+1)}> click</button>
        <h1>Technology:{state}</h1>
        <button onClick={()=>{
            setState("Fluuter")
        }}>changeTechonology</button>
    </div>
  )
}

export default Effect