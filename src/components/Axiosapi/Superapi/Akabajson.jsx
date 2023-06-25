import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Akabajson = () => {
let [state,setState]=useState([])
let [search,setSearch]=useState("")
useEffect(()=>{
  axios.get("https://akabab.github.io/superhero-api/api/all.json")
  .then((res)=>setState(res.data))
},[])
    function find(event){
      setSearch(event.target.value)
    }
    
      let results=state.filter((event)=>{
       event.name.toLowerCase().includes(search.toLowerCase)
      })
    
  return (
    <div style={{margin:"70px"}}>
      <h1 className='text-center mb-3 text-success bg-light
'>SUPER HEROES</h1> 
      <input type="search" onChange={find} value={search} name="search" className='form-controlled w-50' />
    
     <table style={{border:"5px  dotted"}}  className='table table-bordered  table-hover table-row   m-auto  text-center ' >
      <thead className='table-primary '>
        <tr className='text-danger'>
        <th className='align-middle' rowSpan={2}>ID</th>
        <th rowSpan={2} className='align-middle'>NAME</th>
        <th rowSpan={2} className='align-middle'>PHOTO</th>
        <th colSpan={3}>APPEARANCES</th>
        <th colSpan={3}>BIOGRAPHY</th>
        </tr>
        <tr>
          <th>GENDER</th>
          <th>HEIGHT</th>
          <th>WEIGHT</th>
           <th>FULLNAME</th>
           <th>ALIASNAME</th>
           <th>PLACE</th>
        </tr>
      </thead>
     
      {
        results.map((elem)=>{
         return(
          <>
             <tbody >
        <tr rowSpan={4} className='table-warning bg-warning"'>
          <th>{elem.id}</th>
          <th>{elem.name}</th>
          <td><img style={{height:"250px",width:"250px"}} src={elem.images.md} alt="not" /></td>
                <td>{elem.appearance.gender}</td>
                <td>{elem.appearance.height[0]}</td>
                <td>{elem.appearance.weight[1]}</td>
                  <td rowSpan={2}>{elem.biography.fullName}</td>
                  <td>{elem.biography.aliases[0]}</td>
                  <td>{elem.biography.placeOfBirth}</td>
        </tr>
      </tbody>
      </>
         )
        })
      }

     </table>
    </div>
  )
}

export default Akabajson