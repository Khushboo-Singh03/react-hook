import React, { useContext } from 'react'
import { CountContext } from '../../App'

const ComponentF = () => {

  const countCtext = useContext(CountContext)

  return (
    <>
      <div>
        <h2>Component F</h2>
        <button onClick={() => countCtext.countDispatch('increment')}>Increment</button>
        <button onClick={() => countCtext.countDispatch('reset')}>Reset</button>
        <button onClick={() => countCtext.countDispatch('decrement')}>Decrement</button>
      </div>
    </>
  )
}

export default ComponentF;