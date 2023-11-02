import React, { useEffect, useState } from 'react'

const ConditionalRender = () => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log('mouse event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mouseover', logMousePosition)

        return () =>{
            console.log('component unmouting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])



    return (
        <>
            <div>
                Hooks X- {x} Y - {y}
            </div>
        </>
    )
}

export default ConditionalRender