import React from 'react'
import { useState } from 'react'

const Employeeform = () => {
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
  <input type="text" onChange={handleChange} className='form-control' placeholder='Enter the customer name' value={state.name} name='fname' />
  </div>
  <div className="mt-4">
  <input type="text" onChange={handleChange} className='form-control' placeholder='Enter customer  mobile mobile number' value={state.mobile} name='mobile' />
  </div>
  <div className="mt-4">
  <input type="email" onChange={handleChange} className='form-control' placeholder='Enter customer  email' value={state.email} name='email' />
  </div>
  <div className="mt-4">
  <input type="text" onChange={handleChange} className='form-control' placeholder='Enter customer place' value={state.city} name='city' />
  </div>
  <div className="mt-4">
    <input type="submit" className='form-control bg-success' />
  </div>
   </form>
   <div className='text-center mt-5'>
     <table className='table table-bordered table-row table-hover'>
      <tbody >
        <tr>
          <th>NAME</th>
          <th>MOBILE NUMBER</th>
          <th>EMAIL</th>
          <th>PLACE</th>
        </tr>
        <tr>
          <td>{newstate.name}</td>
          <td>{newstate.mobile}</td>
          <td>{newstate.email}</td>
          <td>{newstate.city}</td>
        </tr>
      </tbody>
     </table>
   </div>
    </div>
    
  )
}

export default Employeeform