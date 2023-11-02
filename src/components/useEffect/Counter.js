import React, { useEffect, useState } from 'react'

const Counter = () => {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('useEffect - Updating  document title')
        document.title = `You have Clicked ${count} times`;
        document.title = `You have Clicked ${name} times`
    }, [count, name])

 


    return (
        <>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(prevCount => prevCount + 1)}> Click {count} times</button>
        </>
    )
}

export default Counter