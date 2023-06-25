import React, { useState ,useEffect} from 'react'
const Apiprac = () => {
    let [state,setState]=useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users")
        .then((res)=>res.json())
        .then((data)=>setState(data))
    },[])
    console.log(state)
  return (
    <div>
        <h1>Gitub users api</h1>
        {state.map((elem)=>{
            return(
                <ol key={elem.id}>
            <li>{elem.id}</li>
            <li>{elem.login}</li>
            <li><img src={elem.avatar_url} alt="" /></li>
                </ol>
            )
        })
        }
    </div>
  )
}
export default Apiprac