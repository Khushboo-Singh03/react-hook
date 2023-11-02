import React, { useState } from 'react';

const CounterUseState = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(count => count + 1)
        }
    }


    console.log(count)

    return (
        <>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={incrementFive}>5+</button>
            <button>{count}</button>
            <button onClick={() => setCount(initialCount)} >Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        </>
    )
}

export default CounterUseState;