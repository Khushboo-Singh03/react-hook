import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'reset':
            return initialState;
        case 'decrement':
            return state - 1;
        case 'increment5+':
            return state + 5;
        default:
            return state
    }
}

const ReducerA = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div>
                <h2>Count  {count}</h2>
                <button onClick={()=> dispatch('increment')}>Increment</button>
                <button onClick={()=> dispatch('reset')}>Reset</button>
                <button onClick={()=> dispatch('decrement')}>Decrement</button>
                <button onClick={()=> dispatch('increment5+')}>Increment +5</button>
            </div>
        </>
    )
}

    export default ReducerA