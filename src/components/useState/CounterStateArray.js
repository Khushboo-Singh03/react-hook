import React, { useState } from 'react'

const CounterStateArray = () => {

    const [items, setItems] = useState([]);

    const addItem = ()=>{
        setItems([...items, {
            id : items.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }

  return (
    <>
    <button onClick={addItem}>Add Item</button>
    <ul>
    {
        items.map((item, i)=>(
            <><div key={i}>{item.value}</div></>
        ))
    }

    </ul>
    </>
  )
}

export default CounterStateArray