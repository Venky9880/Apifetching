import React,{useState} from "react";
import { accdata } from "./accdata";
export const Qa=(props)=>{
    let {id,question,answer}=props
    let[state,setState]=useState(true)
    return(
        <>
        <p className='alert alert-danger text-danger  w-50 mx-auto' onClick={()=>setState(!state)}>{id}{question}</p>
        {state?"":<p className="w-50 mx-auto ps-4">{answer}</p>}
        </>
    )
}
const Acc=()=>{
    return(
        <>
        <h1 className="border border-5 border-warning rounded-pill text-center w-50 my-3 mx-auto">ACCORDION</h1>
        {accdata.map((elem)=>{
            let{id,question,answer}=elem
            return(
                <>
                <Qa id={id+".  "} question={question} answer={answer}/>
                </>
            )
        })}
        </>
    )
}
export default Acc