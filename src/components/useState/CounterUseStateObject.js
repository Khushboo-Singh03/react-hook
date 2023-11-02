import React, { useState } from 'react'

const CounterUseStateObject = () => {

    const [name, setName] = useState({
        firstName: "", lastName: ""
    })

    return (
        <>
            <input type="text" name="firstName" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
            <input type="text" name="lastName" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
            <h2>Your First Name : {name.firstName}</h2>
            <h2>Your Last Name : {name.lastName}</h2>
            <h2> {JSON.stringify(name)}</h2>
        </>
    )
}

export default CounterUseStateObject;