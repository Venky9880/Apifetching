import React from 'react'
import { useReducer } from 'react'

const Reducer = () => {
    function reducer (state,action){
        switch(action){
            case "INC" : return {init_count:state.init_count+1,bool:state.bool}
            case "DEC" : return {init_count: state.init_count-1, bool:state.bool}
            case "click" : return {init_count : state.init_count, bool:!state.bool}
            default :return state
        }
    }

    let [state,dispatch] =useReducer(reducer , {init_count:0,bool:true})
  return (
    <div>
    <h1>{state.init_count}</h1>
    <button onClick={()=>dispatch("INC")}> Increment</button>
    <button onClick={()=> dispatch("DEC")}>Decrement</button>
    <button onClick={()=> dispatch("click")}>{state.bool?"ON":"OFF"}</button>

    </div>
  )
}

export default Reducer