import React from 'react'

const Todoitem = (props) => {
    let {elem , handleDelete , i} = props
  return (
    <div className='d-flex justify-content-between w-50 mt-5' >
        <li>{elem}</li>
        <div className='d-flex mx-5'>
            <button onClick={() => handleDelete(i)} className='btn btn-danger
             btn-lgmx-1'>Delelte</button>
             <button className='btn btn-primary btn-lg'>Edite</button>
        </div>
    </div>
  )
}

export default Todoitem