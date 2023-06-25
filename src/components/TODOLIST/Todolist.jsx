import React, { useState } from 'react'
import Todoitem from './Todoitem'
const Todolist = () => {
    let [state,setstate]=useState("")
    let [newstate, setNewState]=useState([])

    let handleChange = (e) =>{
        setstate(e.target.value)
    }
    let handlesubmit = (e) =>{
        setNewState((preVal) => {
            return [...preVal , state]
        })  
        setstate("")
        e.preventDefault()
    }
    let handleDelete = (i) =>{
        setNewState(() =>{
            return newstate.filter((elem , index) =>{
                return i !== index
            })
        })
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input onChange={handleChange} type="text" placeholder='Enter Todo' value={state} />
            <button type='submit'>Add Todo</button>
        </form>
        <ol>
            {
            newstate.map((elem , i) =>{
                return <Todoitem 
                key = {i}
                elem = {elem}
                handleDelete = {handleDelete}
                i ={i}
                />
            })}
        </ol>
    </div>
  )
}
export default Todolist