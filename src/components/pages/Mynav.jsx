import React from 'react'
import{Link,NavLink} from 'react-router-dom'

const Mynav = () => {
  return (
    <>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"about"}>About</NavLink>
        <NavLink to={"contact"}>Contact</NavLink>
        <NavLink to={"services"}>Services</NavLink>
    </>
  )
}

export default Mynav