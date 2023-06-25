import React from "react";
import Card from "./card";
import { galdataarray } from "./gal-data";

const Gallery=() => {
return (
    <div className='gallery'>
        {galdataarray.map((elem)=>{
            return <Card image={elem.image} des={elem.desc}/>
        })}
    </div>
)
}
export default Gallery