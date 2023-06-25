import React from 'react'
import { useEffect,useState } from 'react'
import "./ApiDesign.css"


const Desg=({id,avatar,first_name})=>
{
    return(
       <div id='card-head'>
         <div>
    <div id='border'>
    <h1 className='id'>{id}</h1>
        <img src={avatar} alt="" />
    </div>
        <h1>{first_name}</h1>
    </div>
       </div>
    )
}

const Api = () => {

  const [api,setApi]=useState()
    const [state,setState]=useState([])
    
    useEffect(()=>{
        fetch("https://reqres.in/api/users?page=2")
        .then((res)=>res.json())
        .then((data)=>setState(data.data))
    },[])
  return (
   <div>
    <input type="text" />
     <div id='card_head'>
     
     {       
         state.map((e)=>{
            let {id,avatar,first_name}=e
            return(
             <div>
           <Desg id={id} avatar={avatar} first_name={first_name} key={id}     />
             </div>
            )
         })
     }
 </div>
   </div>
  )
}

export default Api