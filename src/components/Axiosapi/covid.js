import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { type } from '@testing-library/user-event/dist/type'
import { Table } from 'react-bootstrap'
import HeaderAndFooterExample from './AxiosCard'
 
const Covid = () => {
    let[state,setState]=useState([])
    useEffect(()=>{
        axios.get("https://data.covid19india.org/data.json")
        .then((res)=>setState(res.data.cases_time_series))
    },[])
  return (
    <div className='' style={{display:'grid',gridTemplateColumns:"auto auto auto",marginRight:"20px"}}>
      {
        state.map((elem)=>{
          let {dailyconfirmed,dailydeceased,dailyrecovered,date,dateymd,totalconfirmed,totaldeceased,totalrecovered}=elem
          return(
            <HeaderAndFooterExample dailyconfirmed={dailyconfirmed} dailydeceased={dailydeceased} dailyrecovered={dailyrecovered} date={date} 
            dateymd={dateymd} totalconfirmed={totalconfirmed}totaldeceased={totaldeceased} totalrecovered={totalrecovered}/>
            
          )
        })
      }
    </div>
   
   
  )
}

export default Covid