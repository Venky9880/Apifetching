import React from 'react'
import All,{Music,Scene,Dramedy} from './NavBar'

const Youtu = () => {
  return (
    <div>
        <input type="text" className='form-control mx-auto w-50 ' style={{borderRadius:"10%"}} />
        <div className='d-flex justify-content-evenly'>
        <All />
        <Music/>
        <Scene/>
        <Dramedy/>
        </div>
    </div>
  )
}

export default Youtu