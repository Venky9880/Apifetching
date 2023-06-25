import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    let [state,setState]=useState([])
    useEffect(()=>{
        axios.get("https://api.github.com/users")
        .then(response=>{
            setState(response.json.data)
        })
    },[])
  return (
    <div>
        {state.map(obj=>{
            let {login,id,avatar_url}=obj
            return(
                <ol>
                    <li>{login}</li>
                    <li>{id}</li>
                    <li> <img src={avatar_url} alt="" style={{height:100}} /></li>
                </ol>
               
            )
        })}
    </div>
  )
}

export default FetchApi