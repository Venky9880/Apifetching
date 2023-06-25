import React, { useState } from 'react'

const Togglepara = () => {
    let [state,setState]=useState(false)
  return (
    <>
    {state?"":<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magni necessitatibus facere sit. Facilis distinctio doloremque maiores rem rerum reiciendis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam nemo a blanditiis reprehenderit magnam, accusamus rem maiores voluptatibus velit nisi, placeat dolore necessitatibus, libero consectetur sed voluptates possimus illo. Similique molestiae iusto numquam laudantium, voluptatum rerum voluptate necessitatibus deleniti harum!.</p>}
    
    <button onClick={()=>setState(!state)}>{state?"show":"hide"}</button>
    </>
  )
}

export default Togglepara