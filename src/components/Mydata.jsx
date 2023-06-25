import React from "react";
import { mydata } from "./studentdate/data";
const Mydata=()=>{
    return(
        <>
        <h1>QUALIFICATION DETAILS</h1>
        {mydata.map((elem)=>{
            let {myname,degree,college,stream,percentage,yop,email,mobile}=elem
            return(
                <ol>
                    <li>{myname}</li>
                    <li>{degree}</li>
                    <li>{stream}</li>
                    <li>{college}</li>
                    <li>{percentage}</li>
                    <li>{yop}</li>
                    <li>{email}</li>
                    <li>{mobile}</li>
                </ol>
            )
            
        })}
        </>
    )
}
export default Mydata