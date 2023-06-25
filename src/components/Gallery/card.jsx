import React from "react";
const Card=(props)=>{
    let {image,des}=props
    return(
        <div className='card'>
            <div className='card-header'>
              <img src ={image} alt=""/>
            </div>
            <div className='card-body'>
                {des}
            </div>
        </div>
    )
}
export default Card