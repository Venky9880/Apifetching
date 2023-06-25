import React, { useState } from 'react'

const Practice = () => {
 let [name,setName]=useState("")
let [name1,setName1]=useState("")
let [newname,setNewName]=useState("")
function getData(){
  setNewName(name1)
}
  return (
    <div>
      <h1>ON CHANGE WITHOUT VALUES ATRIBUTE</h1>
      <input type="text" onChange={(e)=>setName(e.target.value)} className='form-control w-50 mx-auto my-5' />
      <h1>Username is:{name}</h1>
      <h1>ONCLICK AND ONCHANGE WITH VALUE ATRIBUTE</h1>
      <input type="text" onChange={e=>setName1(e.target.value)} value={name1} className="form-control w-50 mx-auto my-5" />
      <h1>Username is:{newname}</h1>
      <button onClick={getData} className='btn btn-outline-success btn-lg d-block m-auto'>getData</button>
    </div>
  )
}

export default Practice