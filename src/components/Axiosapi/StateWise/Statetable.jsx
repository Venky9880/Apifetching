import axios from 'axios'
import React, { useEffect, useState } from 'react'


const TableRow =({state,active,confirmed,deaths,deltaconfirmed,deltadeaths,recovered,lastupdatedtime})=>{
    return(
    <tr>
        <td>{state}</td>
        <td>{active}</td>
        <td>{confirmed}</td>
        <td>{deaths}</td>
        <td>{deltaconfirmed}</td>
        <td>{deltadeaths}</td>
        <td>{recovered}</td>
        <td>{lastupdatedtime}</td>
    </tr>)
}

const Statetable = () => {
    let[state,setState]=useState([])
    useEffect(()=>{
        axios.get("https://data.covid19india.org/data.json")
        .then((res)=>setState(res.data.statewise))
    },[])
  return (
    <div>
        <input type="text" placeholder='Enter your state' />
    <table className='table table-bordered table-striped table-hover  m-auto ' style={{textAlign:"center"}}>
     <thead>
        <tr>
            <th className='p-3 mb-2 bg-info text-white'>StateCode</th>
            <th>Active Cases</th>
            <th>Confirmed Cases</th>
            <th>Deaths</th>
            <th>Deltaconfirmed</th>
            <th>Deltadeaths</th>
            <th>recovered</th>
            <th>lastupdatedtime</th>
        </tr>
     </thead>
     <tbody>
        {state.map((elem)=>{
            return(
            <TableRow state={elem.state} active={elem.active} confirmed={elem.confirmed} deaths={elem.deaths}  deltaconfirmed={elem.deltaconfirmed} deltadeaths={elem.deltadeaths} recovered={elem.recovered} lastupdatedtime={elem.lastupdatedtime} />
       ) })}
     </tbody>
    </table>
</div>
    
    )
}


export default Statetable