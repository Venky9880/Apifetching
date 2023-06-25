import React, { useEffect, useState } from 'react'

const Practice2 = () => {
  let[api,newapi]=useState("")
 useEffect(()=>{
  fetch("https://api.github.com/users")
  .then((res)=>res.json())
  .then((data)=>newapi(data))
 },[])
  return (
    <div>
     {
      api.map((e)=>{
        return(
          <>
           console.log(e)
          </>
        )
          
      })
     }
    </div>
  )
}

export default Practice2