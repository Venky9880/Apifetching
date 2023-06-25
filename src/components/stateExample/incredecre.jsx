import React,{useState} from 'react'
let obj={
    display:"flex",
    width:"200px",
    margin:"auto"
}

const InDex = () => {
    let [count,setCount]=useState(0)
    let handleDec=()=>{
        if(count>0)
        setCount(count-1)
        else
        alert("thankyou")
    }
  return (
    <>
    <h1>{count}</h1>
    <div style={obj}>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={handleDec}>-</button>
    </div>
    </>
  )
}

export default InDex