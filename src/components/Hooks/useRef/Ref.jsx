import React, { useRef, useState } from 'react'

const Ref = () => {
    let [name,setName]=useState("")
    let myref=useRef()
    let reset=()=>{
        setName("")
        myref.current.focus()
        myref.current.style.backgroundColor="yellow"
    }
    let changeColor=()=>{
        myref.current.style.color="red"
    }
  return (
    <div>
        <input ref={myref} type="text" onChange={e=>setName(e.target.value)} value={name}  />
        <button onClick={reset}>Reset</button>
        <button onClick={changeColor}> changecolor</button>
    </div>
  )
}

export default Ref