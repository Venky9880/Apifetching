import React, { useState } from 'react'

function Para() {
   let par="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum hic quo delectus nemo fuga aspernatur."
    let [First,second]=useState(par)
    

  return (
    <>
    <button onClick={()=>{second(" ")}}>CLICKME</button>
    <p>{First}</p>
    </>
  )
}

export default Para