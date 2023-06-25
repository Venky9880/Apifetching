import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import WithHeaderExample from './Indiacard'
import axios from 'axios'

const India = () => {
    let[state,setState]=useState({})
    let{active,confirmed,deaths,deltaconfirmed,deltadeaths,recovered,lastupdatedtime}=state
    useEffect(()=>{
        axios.get("https://data.covid19india.org/data.json")
        .then(res=>setState(res.data.statewise[0]))
    },[])
  return (
    <div>
  <h1>INDIAS DELTA/COVID19 CASES REPORT TILL {lastupdatedtime}</h1>
<div className='text-danger'  style={{display:"grid",gridTemplateColumns:"auto auto auto",gridGap:"30px",margin:"30px"}}>
    <WithHeaderExample style={{color:"black"}} title="Active" activecases={active}/>
    <WithHeaderExample title="Confirmed" activecases={confirmed}/>
    <WithHeaderExample title="Deaths" activecases={deaths}/>
    <WithHeaderExample title="deltaconfirmed" activecases={deltaconfirmed}/>
    <WithHeaderExample title="deltadeaths" activecases={deltadeaths}/>
    <WithHeaderExample title="recovered" activecases={recovered}/>
</div>
    </div>

  )
}

export default India