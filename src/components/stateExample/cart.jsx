import React, { useState } from 'react'
let num=1
const Cart = () => {
let [state,setState]=useState(0)
let handleClick=()=>{
    setState(num)
    num=num+1
}
let handleClickneg=()=>{
    num=num-1
    setState(num)
    
}
  return (
 <>
   <h1>{state}</h1>
   <button onClick={handleClick}>+</button>
   <button onClick={handleClickneg}>-</button>
   
 </>
  )
}

export default Cart