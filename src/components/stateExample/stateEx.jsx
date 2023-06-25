import React from 'react'
import { useState } from 'react'
const StateEx = () => {
  let [state,setState]=useState("Hello")
  let handleClick=() =>{
    setState("HI")
  }
  return (
    <>
    <h1>{state} React JS</h1>
    <button onClick={handleClick}>click    </button>
    
    </>
  )
}

export default StateEx