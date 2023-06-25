import React,{useState} from 'react'

const Formpractice = () => {
  let [data,newData]=useState({
    name:"",
    email:""
  })
  let [empty,setEmpty]=useState({
    name:"",
    email:""
  })
  function onchange(e){
    newData({...data,[e.target.name]:e.target.value})
  }
  function subt(e){
     setEmpty(data)
     e.preventDefault()
     newData({
      name:"",
      email:""
     })
  }
  return (    
    <div>
   <form action="" onSubmit={subt}>
    <input type="text" placeholder='enter your name' onChange={onchange} name="name" value={data.name} />
    <input type="email" placeholder='enter your name' onChange={onchange} name="email" value={data.email} />
    <input type="submit" /><br /><br />
    <h1> YOUR DATA IS</h1>
    <h1>your name is:{empty.name}</h1>
    <h1>your email is:{empty.email}</h1>
   </form>

    </div>
  )
}

export default Formpractice