import React, { useContext } from 'react'
// import ComponentC from './ComponentC'
import { HobbiesContext, LiveContext, NameContext, SurnameContext } from '../../App'

const ComponentB = () => {

  const user = useContext(NameContext);
  const surname = useContext(SurnameContext);
  const hobby = useContext(HobbiesContext);
  const lived = useContext(LiveContext)


  return (
    <>
    {user}  {surname} {hobby} {lived}
     {/* <ComponentC/> */}
    </>
  )
}

export default ComponentB;