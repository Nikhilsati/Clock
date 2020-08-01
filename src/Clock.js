import React, { useState, useEffect } from 'react'
import moment from 'moment'
import './Clock.css'
const Clock = () => {
    const [ time, setTime] = useState(moment())
    useEffect( () => {
        setInterval(() => setTime(moment(), 1000 ))
    } )

    return (
        <div>
            <svg viewBox="0 0 40 40">
            <path
                d="M20 5
                a 14 14 10 0 1 0 28
                a 14 14 0 0 1 0 -28"
                fill="none"
                stroke="#fc85ae"
                stroke-width="1"
                stroke-dasharray= {`${parseInt(time.format('ss'))/60*87.92}, 87.92`}
            />
            <path
                d="M20 3
                a 16 16 0 0 1 0 32
                a 16 16 0 0 1 0 -32"
                fill="none"
                stroke="#9e579d"
                stroke-width="1"
                stroke-dasharray= {`${parseInt(time.format('mm'))/60*100.48}, 100.48`}
            />
            <path
                d="M20 1
                a 18 18 0 0 1 0 36
                a 18 18 0 0 1 0 -36"
                fill="none"
                stroke="#303a52"
                stroke-width="1"
                stroke-dasharray= {`${parseInt(time.format('hh'))/12*113.04}, 113.04`}
            />
            <text  x="10" y="20" style={{"fontSize":"5px", "fill": "white"}}>{ time.format("HH:mm:ss") }</text>
            </svg>
        </div>
    )
}

export default Clock
