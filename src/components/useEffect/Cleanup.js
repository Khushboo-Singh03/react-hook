import React, { useState } from 'react'
import ConditionalRender from './ConditionalRender'

const Cleanup = () => {

    const [display, setDisplay] = useState(true)

  return (
    <>
    <button onClick={()=> setDisplay(!display)}>Toggle Display</button>
    {display && <ConditionalRender/>}
    </>
  )
}

export default Cleanup