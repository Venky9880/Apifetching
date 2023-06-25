import React from 'react'
import { useState } from 'react'

const Studentform2 = () => {
    let [state,setState]=useState({name:"",mobile:"",email:"",city:""})
    let [newstate,setNewState]=useState({})
    function handlesubmit(event){
        setNewState(state)
        setState({name:"",mobile:"",email:"",city:""})
        event.preventDefault()
    }
    function handleChange(event){
        let val=event.target.value
        let name=event.target.name
        setState((preVal)=>{
            switch(name){
                case "fname": return {...preVal, name:val}
                case "mobile" : return {...preVal,mobile:val}
                case "email" : return {...preVal,email:val}
                case "city" : return {...preVal,city:val}
            }
        })
    }
  return (
    <div>
   <h1 className='text-center'>STUDENT DETAILS</h1>
   <form action="" className='col-5 mx-auto' onSubmit={handlesubmit}>
    <div className='mt-4'>
  <input type="text" onChange={handleChange} className='form-control' placeholder='Enter you fullname' value={state.name} name='fname' />
  </div>
  <div className="mt-4">
  <input type="text" onChange={handleChange} className='form-control' placeholder='Enter your mobile' value={state.mobile} name='mobile' />
  </div>
  <div className="mt-4">
  <input type="email" onChange={handleChange} className='form-control' placeholder='Enter your email' value={state.email} name='email' />
  </div>
  <div className="mt-4">
  <input type="text" onChange={handleChange} className='form-control' placeholder='Enter your place' value={state.city} name='city' />
  </div>
  <div className="mt-4">
    <input type="submit" className='form-control bg-success' />
  </div>
    
   </form>
   <div className='text-center mt-5'>
     <h3>Student fullname:{newstate.name}</h3>
     <h3>Mobile number:{newstate.mobile}</h3>
     <h3>Email Id:{newstate.email}</h3>
     <h3>City :{newstate.city}</h3>
   </div>
    </div>
  )
}

export default Studentform2